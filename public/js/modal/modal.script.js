const modalSignIn = {
    template: '#modal-sign-in'
}

const modalLogin = {
    template: '#modal-login'
}

let modal = new Vue({
    el: '#modal',
    components: {
        'modal-login': modalLogin,
        'modal-sign-in': modalSignIn,
        'modal-cart': modalCart
    },
    data: {
        isActive: false,
        selectedModal: '',
        data: {}
    },
    methods: {
        closeModal: function () {
            return this.isActive = !this.isActive
        },
        openModal: async function (modalName) {
            this.selectedModal = modalName
            if (this.selectedModal === 'modal-cart') {
                let fetchData = await fetch('/cart', { //Todo fetch(\cart\____1____)
                    method: 'GET',
                })
                    .then(res => res.json())
                    .then(result => JSON.parse(result))
                console.log('fetchData', fetchData)
                this.data = fetchData
            }
            this.isActive = !this.isActive
        }
    },
})
