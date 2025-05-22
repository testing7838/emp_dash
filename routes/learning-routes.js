const express = require('express')
const {learningCourse, upcomingCourse, runningCourse,  completedCourse} = require('../controllers/learningController')
const router = express.Router()

router.post('/learning-course', learningCourse)
router.post('/upcoming-course', upcomingCourse)
router.post('/running-course', runningCourse)
router.post('/completed-couse', completedCourse)

module.exports = router