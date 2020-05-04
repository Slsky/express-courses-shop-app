const { Router } = require('express')
const Courses = require('../models/courses')
const router = Router()

router.get('/', (req, res) => {
    res.render('courses', { isCpurses: true })
})

router.get('/get', async (req, res) => {
    res.json(await Courses.getAll())
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
    res.json(await Courses.getAll())
    // res.redirect('/courses')
})

module.exports = router