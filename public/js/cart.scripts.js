let cartTable = new Vue({
    el: '#cart-table',
    data: {
        courses: [],
        price: 0
    },
    methods: {
        onDeliteButton: async function (id) {
            console.log('Click Delete', id)
            try {
                let afterDeleteData = await fetch(`cart/${id}/delete`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => JSON.parse(result))

                this.courses = afterDeleteData.courses
                this.price = afterDeleteData.price

            } catch (e) {
                console.log('Error afterFetch', e)

                this.courses = []
                this.price = 0
            }

        }

    },
    created: async function () {
        let fetchData = await fetch('cart/1', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(result => JSON.parse(result))
        console.log('fetchData', fetchData)
        this.courses = fetchData.courses
        this.price = fetchData.price
    },
    computed: {
        getCourses: function () { return this.courses },
    }
})





