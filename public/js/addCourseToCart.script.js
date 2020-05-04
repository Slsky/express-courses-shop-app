
const CoursesModule = new Vue({
    el: '#courses',
    data: {
        courses: [],
    },
    methods: {
        deliteCourse: async function (id) {
            console.log('Click Delete', id)
            try {
                let afterDeleteData = await fetch(`/courses/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())

                this.courses = afterDeleteData


            } catch (e) {
                console.log('Error afterFetch', e)

                this.courses = []

            }

        },
        addToCart: async function (id) {
            console.log('add to cart', id)
            try {
                await fetch(`/cart/${id}/add`, {
                    method: 'POST'
                }).then(res => console.log(res))
            } catch (e) {
                console.log('Error afterFetch', e)
            }

        }
    }
    ,
    created: async function () {
        let coursesList = await fetch('/courses/get', {
            method: 'GET',
        }).then(res => res.json())

        this.courses = coursesList
    }
})
console.log("Courses add script")