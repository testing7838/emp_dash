require('dotenv').config();
console.log('nirbhay tiwari ...')

const express = require('express');
const client = require('./db/psql/db')
const authRouter = require('./routes/user-routes');
const homeRouter = require('./routes/home-route');
const adminRouter = require('./routes/admin-routes')
const learningRouter = require('./routes/learning-routes')

const app = express();

app.use(express.json());

client.connect().then(() => console.log('Connected to the PostgreSQL database')).catch((err) => console.error('Connection error', err.stack));


app.use('/api/v1/user', authRouter)
app.use('/api/v1/user', homeRouter)
app.use('/api/v1/user/learning', learningRouter)




app.listen(process.env.PORT || 3000, (req, res)=>{
console.log('server is running on port 3000')
})