const { Router } = require('express')
const Courses = require('../models/courses')
const router = Router()

router.get('/', (req, res) => {
    res.render('add-course', {
        title: 'Add Course',
        isAddCourse: true
    })
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const { title, url, price } = req.body
    await new Courses(title, price, url).save()
    res.redirect('/courses')
})




module.exports = router