new Vue({
    el: '#exercise',
    data: {
        value: 0,
    },
    watch: {
        value: function () {
            let vm = this
            setTimeout(() => {
                vm.value = 0
            }, 3000);
        }
    },
    computed: {
        result_other: function () {
            return this.value < 37 ? result = 'not there yet' : result = 'done'
        }
    },
    methods: {
        result: function () {
            return this.value < 37 ? result = 'not there yet' : result = 'done'
        }
    }
});