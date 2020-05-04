const modalCart = {
    template: '#modal-cart',
    props: {
        initial: {
            type: Object,
            default: {
                courses: [],
                price: 0
            }
        }
    },
    data() {
        return {
            courses: this.initial.courses,
            price: this.initial.price
        }
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

                this.initial.courses = afterDeleteData.courses
                this.initial.price = afterDeleteData.price

            } catch (e) {
                console.log('Error afterFetch', e)
            }

        }

    },
    created: async function () {
        let fetchData = await fetch('/cart', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(result => JSON.parse(result))
        console.log('fetchData', fetchData)
        this.courses = fetchData.courses
        this.price = fetchData.price
    },
    computed: {
        getCourses: function () { return this.initial.courses },
        getTotalPrice: function () { return this.initial.price }
    }
}

