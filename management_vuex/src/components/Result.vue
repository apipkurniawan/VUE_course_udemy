<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
export default {
  /* before using store */
  // props: ['counter']
  /* after using store */
  computed: {
    counter() {
      //   return this.$store.state.counter;
      return this.$store.getters.doubleCounter;
    }
  }
};
</script>