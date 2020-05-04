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
    },
    methods: {
        closeModal: function () {
            return this.isActive = !this.isActive
        },
        openModal: function (modalName) {
            this.selectedModal = modalName
            this.isActive = !this.isActive
        }
    },
})
