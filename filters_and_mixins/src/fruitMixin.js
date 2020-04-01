export const fruitMixin = {
  data: function () {
    return {
      fruits: ["Apple", "Manggo", "Banana", "Melon"],
      filterText: ""
    };
  },
  computed: {
    filterFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  created() {
    console.log('created');
  }
}
