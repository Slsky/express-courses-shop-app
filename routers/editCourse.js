const { Router } = require('express')
const Courses = require('../models/courses')
const router = Router()

router.get('/:id', async (req, res) => {
    console.log("Id", req.params.id)

    res.render('edit-course', {
        context: await Courses.findBy('id', req.params.id)
    })
})

router.get('/:id/edit', async (req, res) => {
    const { title, imgUrl, price, id } = req.body
    await Courses.update('id', id, { title, imgUrl, price, id })

    res.redirect('/courses')
})

module.exports = router