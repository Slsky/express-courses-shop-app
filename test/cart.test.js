const assert = require("assert");
const request = require('supertest')

const Cart = require('../models/cart')

describe('Cart', () => {

    it('Cart.fetch() - should retutn cart object', async () => {

        const expected = { courses: [], price: 0 }
        const result = await Cart.fetch()

        assert.deepEqual(result, expected)
    })


    it('Cart.add() - should retutn cart object wit new added value', async () => {

        const expected = { courses: [{ title: 'Title', price: 2000, imgUrl: 'url', id: 12345, count: 1 }, { title: 'Title', price: 2000, imgUrl: 'url', id: 12344, count: 1 }], price: 4000 }
        await Cart.add({ title: 'Title', price: 2000, imgUrl: 'url', id: 12345 })
        await Cart.add({ title: 'Title', price: 2000, imgUrl: 'url', id: 12344 })

        const result = await Cart.fetch()
        assert.deepEqual(result, expected)
    })

    it('Cart.add() - should retutn cart object wit new added value', async () => {

        const expected = { courses: [{ title: 'Title', price: 2000, imgUrl: 'url', id: 12345, count: 2 }, { title: 'Title', price: 2000, imgUrl: 'url', id: 12344, count: 1 }], price: 6000 }
        await Cart.add({ title: 'Title', price: 2000, imgUrl: 'url', id: 12345 })

        const result = await Cart.fetch()

        assert.deepEqual(result, expected)
    })

    it('Cart.decris() - should return cart object with new decrised value ', async () => {

        const expected = { courses: [{ title: 'Title', price: 2000, imgUrl: 'url', id: 12345, count: 2 }], price: 4000 }
        await Cart.decris({ title: 'Title', price: 2000, imgUrl: 'url', id: 12344, count: 1 })
        const result = await Cart.fetch()
        assert.deepEqual(result, expected)
    })


    it('Cart.decris() - should return cart object with new decrised value ', async () => {

        const expected = { courses: [{ title: 'Title', price: 2000, imgUrl: 'url', id: 12345, count: 1 }], price: 2000 }
        await Cart.decris({ title: 'Title', price: 2000, imgUrl: 'url', id: 12345, count: 1 })
        const result = await Cart.fetch()
        assert.deepEqual(result, expected)
    })

    after(async () => {
        await Cart.decris({ title: 'Title', price: 2000, imgUrl: 'url', id: 12345, count: 1 })
    })
})