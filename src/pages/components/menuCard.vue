<template>
  <f7-card>
    <slot>
      <f7-link color="black" :href="page">
        <label for="">
          <img :src="image" alt="" class="menu-image" />
          <div class="menu-title">{{ title }}</div>
        </label>
      </f7-link>
    </slot>
  </f7-card>
</template>

<style scoped>

  .card {
    min-height: 90px;
    height: 90px;
    text-align: center;
    padding: 8px;
    border: solid 1px white !important;
  }

  label{
    margin-top: 12px;
  }

  .menu-title{
    padding-top: 8px;
    font-family: 'Raleway-Bold', sans-serif;
  }
</style>

<script>
  export default {
    name: 'menu-card',
    props:{
      title: String,
      image: String,
      page:{
        type: String,
        required: true
      }
    }
  }
</script>
