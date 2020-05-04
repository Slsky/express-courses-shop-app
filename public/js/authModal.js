// let modalFrame = {
//     template: '#modal-frame',
//     props: {
//         active: {
//             type: Boolean,
//         }
//     },
//     data() {
//         return {
//             active: this.prop.active || false
//         }
//     }
//     // computed: {
//     //     getModal: function(){
//     //         return this.active = $props.active
//     //     }
//     // }
// }


let modal = new Vue({
    el: '#modal',
    // components: {
    //     'modal-frame': modalFrame
    // },
    data: {
        isActive: false
    },
    methods: {
        closeModal: function () {
            console.log('Close', this.isActive)
            return this.isActive = !this.isActive
        },
        openModal: function () {
            console.log('Open', this.isActive)
            return this.isActive = !this.isActive
        }
    },
})

// document.getElementById('modal-btn').addEventListener('click', elem => {
//     modal.closeModal()
// })