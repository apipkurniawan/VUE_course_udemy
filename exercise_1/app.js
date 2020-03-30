new Vue({
    el: '#exercise',
    data: {
        name: 'Apip Kurniawan',
        age: 27,
        link: 'https://www.google.com/search?q=koala&safe=strict&rlz=1C1CHBF_enID859ID859&sxsrf=ALeKk03krYoOZuJTnD2sZXqFdMUwbLphZQ:1585229065512&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjPodm6nrjoAhVCeysKHdApBmAQ_AUoAXoECBkQAw&biw=1366&bih=608#imgrc=Heip-kvWAuj8LM',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        random: function () {
            return Math.random()
        },
        count(step, e) {
            this.counter += step
            console.log('event : ', e);

        },
        titik(e) {
            this.x = e.clientX
            this.y = e.clientY
        },
        alert() {
            alert('alert')
        }
    }
})