<template>
  <f7-toolbar tabbar labels bottom-md>
    <f7-link tab-link="#" @click="openDatabase">
      <img class="tabbar-img" src="/static/icons/book.png"/>
      <span class="tabbar-label">Database</span>
    </f7-link>
    <f7-link tab-link="#" @click="openGame">
      <img class="tabbar-img" src="/static/icons/topic.png"/>
      <span class="tabbar-label">Game</span>
    </f7-link>
    <f7-link tab-link="#" @click="openAbout">
      <img class="tabbar-img" src="/static/icons/about.png"/>
      <span class="tabbar-label">About</span>
    </f7-link>
  </f7-toolbar>
</template>

<style scoped>
  .tabbar-img{
    width: 28px;
    height: 28px;
  }
</style>

<script>
  export default {
    name: 'nav-tabbar',
    methods:{
      openDatabase(){

      },
      openGame(){

      },
      openAbout(){

      }
    }
  }
</script>
