<template>
  <f7-block v-if="isLoading">
    <f7-preloader :size="40" color="black"></f7-preloader>
  </f7-block>
</template>

<style scoped>
  .block{
    width: 100%;
    height: 100%;
  }

  .preloader{
    z-index: 1000;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px 10px 10px -20px;
  }
</style>

<script>
  export default {
    props:{
      isLoading: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
