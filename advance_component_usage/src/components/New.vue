<template>
  <div>
    <h2>The New Quote</h2>
    <button @click="counter++">Increase</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  destroyed: function() {
    console.log("destroyed!");
  },
  deactivated() {
    console.log("deactivated!");
  },
  activated() {
    console.log("activated!");
  }
};
</script>

<style scoped>
</style>