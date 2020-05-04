var app = new Vue({

    el: '#app',
    data: {
        errors: {
            price: [],
            title: [],
            url: [],
        },
        title: '',
        price: '',
        url: '',
        mesage: ''
    },
    methods: {
        checkForm: debouce(function (e) {
            if (this.price && this.title && this.url) {
                return true
            }

            this.errors.price.push("Не указана цена")
            console.log("after 3000ms", this.mesage = 'worked')
            e.preventDefault();
        }, 3000),
        validation(e) {
            console.log('Validation', e.target.value)
        }
    },
    computed: {
        validation(e) {
            console.log('Validation', e.target.value)
        }
    }
}
)
