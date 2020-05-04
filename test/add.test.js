const assert = require("assert");
const request = require('supertest')

const fs = require('fs')
const path = require('path')

const Courses = require('../models/courses')

// Example of test

// describe(
//     "Express tests", () => {
//         it("should multiply two numbers", function () {

//             let expected = 8;
//             let result = operations.add(3, 5);
//             assert.equal(result, expected);

//         });

//         it("should return Hello Test", function (done) {

//             request(app)
//                 .get("/")
//                 .expect(page)
//                 .end(done);
//         });
//     }
// )



describe(
    "Curses Model Test", () => {

        const pathToFile = path.resolve(__dirname, '..', 'data', 'courses.json')
        before((done) => {
            setTimeout(() => {
                if (!fs.existsSync(pathToFile)) {
                    fs.writeFile(
                        pathToFile,
                        JSON.stringify([]),
                        'utf8',
                        (err) => {
                            if (err) {
                                throw err
                            }
                        }
                    )
                }
            }, 5000)

            done();
        });

        after(function () {
            fs.writeFile(
                pathToFile,
                JSON.stringify([]),
                'utf8',
                (err) => {
                    if (err) {
                        throw err
                    }
                }
            )
        });



        it("'getAll() -- Load all Courses in emty DB should retern empty Array ", async () => {

            const expected = []
            const result = await Courses.getAll()
            assert.equal(Array.isArray(result), Array.isArray(expected))

        })

        it("'save() -- Save file, after save in DB shold be new Obj", async () => {

            await new Courses('Title', 2000, 'url', 12345).save()
            const expected = { title: 'Title', price: 2000, imgUrl: 'url', id: 12345 }
            const result = await Courses.getAll()
            assert.deepEqual(result[0], expected)

        })

        it("'save() 2 -- Save file, after save in DB shold be new Obj", async () => {

            await new Courses('Title Update', 777, 'url2', 678910).save()
            const expected = [
                { title: 'Title', price: 2000, imgUrl: 'url', id: 12345 },
                { title: 'Title Update', price: 777, imgUrl: 'url2', id: 678910 }
            ]
            const result = await Courses.getAll()
            assert.deepEqual(result, expected)

        })

        it("'removeBy()  -- Remove file, after save should in DB shold be new Obj", async () => {


            const expected = [
                { title: 'Title Update', price: 777, imgUrl: 'url2', id: 678910 }
            ]
            await Courses.removeBy('id', 12345)
            const result = await Courses.getAll()
            assert.deepEqual(result, expected)

        })

        it("'findBy()  -- Save file, after save should in DB shold be new Obj", async () => {

            const expected = { title: 'Title Update', price: 777, imgUrl: 'url2', id: 678910 }

            const result = await Courses.findBy('id', 678910)
            assert.deepEqual(result, expected)
        })

        it("'update()' -- find item by param and update by getting settings", async () => {

            await new Courses('Title', 2000, 'url', 12345).save()
            const expected = [
                { title: 'New Title', price: 777, imgUrl: 'url2', id: 678910 },
                { title: 'Title', price: 2000, imgUrl: 'url', id: 12345 }
            ]
            await Courses.update('id', 678910, 'title', 'New Title')
            const result = await Courses.getAll()
            assert.deepEqual(result, expected)
        })
    });




