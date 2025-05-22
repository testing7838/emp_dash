const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const resgisterUser = async (req, res) => {
    const { personid, lastname, firstname, address, city, password } = req.body;

    if (!personid || !lastname || !firstname || !address || !city || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingUser = await prisma.userDetail.findUnique({
            where: { personid },
        });

        if (existingUser) {
            return res.status(400).json({ error: 'Person ID is already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.userDetail.create({
            data: {
                personid,
                lastname,
                firstname,
                address,
                city,
                password: hashedPassword,
            },
        });

        res.status(201).json({
            message: 'added successfully',
            userId: user.id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error registering user: ${error.message}` });
    }
}

const loginUser = async () => {

}


const forgotPassword = async () => {

}


module.exports = { resgisterUser, loginUser, forgotPassword }