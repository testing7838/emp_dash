const express = require('express')
const {learningCourse, upcomingCourse, runningCourse,  completedCourse, getAllCourses} = require('../controllers/learningController')
const router = express.Router()

router.post('/learning-course', learningCourse)
router.post('/upcoming-course', upcomingCourse)
router.post('/running-course', runningCourse)
router.post('/completed-couse', completedCourse)
router.get('/get-all-course', getAllCourses)

module.exports = router