const fs = require('fs')
const path = require('path')
const { uuid } = require('uuidv4');

class Courses {
    constructor(title, price, imgUrl, id) {
        this.title = title
        this.price = price
        this.imgUrl = imgUrl
        this.id = id || uuid()
    }

    async save() {
        const pathToFile = path.resolve(__dirname, '..', 'data', 'courses.json')
        if (!fs.existsSync(pathToFile)) {
            await fs.writeFile(
                pathToFile,
                JSON.stringify([]),
                'utf8',
                (err) => {
                    if (err) throw err
                    console.log('File is criated')
                }
            )
        }
        const courses = await Courses.getAll()
        courses.push({
            title: this.title,
            price: this.price,
            imgUrl: this.imgUrl,
            id: this.id
        })

        return new Promise((resolve, reject) => {
            fs.writeFile(
                pathToFile,
                JSON.stringify(courses),
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

    static async removeBy(field, param) {
        const pathToFile = path.resolve(__dirname, '..', 'data', 'courses.json')
        let allCourses = await Courses.getAll()
        let courses = allCourses.filter(item => item[field] !== param)

        return new Promise((resolve, reject) => {
            fs.writeFile(
                pathToFile,
                JSON.stringify(courses),
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

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.resolve(__dirname, "..", "data", 'courses.json'),
                'utf-8',
                (err, content) => {
                    if (err) reject(err)
                    resolve(JSON.parse(content))
                }
            )
        })
    }

    static async findBy(field, param) {
        let allCourses = await Courses.getAll()
        return allCourses.find(item => item[field] === param)
    }

    static async update(field, param, fielToChange, newValue) {
        const pathToFile = path.resolve(__dirname, '..', 'data', 'courses.json')
        const courses = await Courses.getAll()
        const idx = courses.findIndex(item => item[field] === param)
        courses[idx][fielToChange] = newValue

        return new Promise((resolve, reject) => {
            fs.writeFile(
                pathToFile,
                JSON.stringify(courses),
                'utf-8',
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        }).catch(err => console.log(err))

    }
}

module.exports = Courses