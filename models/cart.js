const fs = require('fs')
const path = require('path')

const pathToFile = path.resolve(__dirname, '..', 'data', 'cart.json')

class Cart {
    static async add(course) {
        let cart = await Cart.fetch()
        const idx = cart.courses.findIndex(item => item.id === course.id)
        const candidat = cart.courses[idx]
        if (candidat) {
            candidat.count++
            cart.courses[idx] = candidat
        } else {
            course.count = 1
            cart.courses.push(course)
        }

        cart.price += +course.price

        return new Promise((resolve, reject) => {
            fs.writeFile(
                pathToFile,
                JSON.stringify(cart),
                'utf-8',
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    static async decris(id) {
        let cart = await Cart.fetch()
        const idx = cart.courses.findIndex(item => item.id === id)
        const candidat = cart.courses[idx]

        if (candidat.count === 1) {
            cart.courses.splice(idx, 1)
        } else {
            cart.courses[idx].count -= 1
        }

        cart.price -= candidat.price

        return new Promise((resolve, reject) => {
            fs.writeFile(
                pathToFile,
                JSON.stringify(cart),
                'utf-8',
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    static fetch() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.resolve(__dirname, "..", "data", 'cart.json'),
                'utf-8',
                (err, content) => {
                    if (err) reject(err)
                    resolve(JSON.parse(content))
                }
            )
        })
    }
}

module.exports = Cart