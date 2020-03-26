new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert() {
            alert('hai')
        },
        write(e) {
            this.value = e.target.value
        },
        write2(e) {
            this.value = e.target.value
        }
    }
});