const { Router } = require('express')
const router = Router()

const Cart = require('../models/cart')
const Course = require('../models/courses')


// router.get('/', async (req, res) => {

//     const context = JSON.stringify(await Cart.fetch())
//     res.render('cart')
// })

router.get('/', async (req, res) => {

    const context = JSON.stringify(await Cart.fetch())
    res.json(context)
})

router.post('/:id/add', async (req, res) => {

    const course = await Course.findBy('id', req.params.id)
    await Cart.add(course)
    res.redirect('/courses')
})

router.delete('/:id/delete', async (req, res) => {

    await Cart.decris(req.params.id)
    const context = JSON.stringify(await Cart.fetch())
    res.json(context)
})


module.exports = router