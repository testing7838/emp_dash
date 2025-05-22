const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const learningCourse = async (req, res, next) => {
  let { id, coursename, appeared_in_exam, pass } = req.body;
  if (id) id = parseInt(id);

  appeared_in_exam = appeared_in_exam === 'true' || appeared_in_exam === true;
  pass = pass === 'true' || pass === true;

  try {
    // Check if course with the same coursename already exists
    const existingCourse = await prisma.courses.findUnique({
      where: { coursename },
    });

    if (existingCourse) {
      return res.status(409).json({ message: 'Course name already exists' });
    }

    const course = await prisma.courses.create({
      data: {
        ...(id && { id }),
        coursename,
        appeared_in_exam,
        pass,
      },
    });

    res.status(201).json({ message: 'Added successfully', course });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
};

const upcomingCourse = () => {

}

const runningCourse = () => {

}

const completedCourse = () => {

}


module.exports = { learningCourse, upcomingCourse, runningCourse, completedCourse }