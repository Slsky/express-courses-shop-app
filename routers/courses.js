const { Router } = require('express')
const Courses = require('../models/courses')
const router = Router()

router.get('/', async (req, res) => {

    res.render('courses', {
        courses: await Courses.getAll(),
        isCpurses: true
    }
    )
})

router.get('/edit/:id', async (req, res) => {

    res.render('edit-course', {
        context: await Courses.findBy('id', req.params.id)
    })
})

router.post('/edit/:id', async (req, res) => {

    const { title, imgUrl, price, id } = req.body
    await Courses.update('id', id, { title, imgUrl, price, id })

    res.redirect('/courses')
})

router.delete('/delete/:id', async (req, res) => {

    await Courses.removeBy('id', req.params.id)
    res.redirect('/courses')
})

module.exports = router