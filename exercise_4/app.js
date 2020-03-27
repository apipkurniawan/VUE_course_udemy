new Vue({
  el: '#exercise',
  data: {
    atach: false,
    width: 100,
    atachField: '',
    hit: false,
    color: ''
  },
  methods: {
    startEffect: function () {
      this.atach = !this.atach
    },
    startProgress: function () {
      setTimeout(() => {
        this.hit = !this.hit
      }, 3000);
    }
  },
  computed: {
    divClasses: function () {
      return {
        highlight: this.atach,
        shrink: !this.atach
      }
    },
    arrStyle: function () {
      return {
        backgroundColor: 'yellow',
        width: this.width + 'px'
      }
    },
    myStyle: function () {
      return {
        backgroundColor: this.color,
        width: 60 + 'px',
        height: 60 + 'px',
        border: `${1}px solid black`
      }
    },
    prog: function () {
      return {
        myClass: this.hit
      }
    }

  }
});