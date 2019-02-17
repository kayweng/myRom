<template>
  <f7-navbar>
    <f7-nav-left>
      <f7-link v-if="canBack" id="back" @click="back" icon-if-ios="f7:left" icon-if-md="material:left"></f7-link>
    </f7-nav-left>
    <f7-nav-title class="nav-title">
      <slot name="navbar-title">
        <f7-link href="#" @click="backToRoot">
          {{title}}
        </f7-link>
      </slot>
    </f7-nav-title>
    <f7-nav-right>
      <slot name="navbar-right">
        <a href="" v-if="isLogin" @click="logon">
          <img class="nav-icon" src="static/icons/login.png" alt="login">
        </a>
        <a href="" v-else @click="login">
          <img class="nav-icon" src="static/icons/logoff.png" alt="logoff">
        </a>
      </slot>
    </f7-nav-right>
    <f7-subnavbar v-if="$slots['subnavbar']">
      <slot name="subnavbar"></slot>
    </f7-subnavbar>
  </f7-navbar>
</template>

<style scoped>
  .nav-title{
    text-align: center !important;
    z-index: 0 !important;
  }

  .nav-icon{
   vertical-align: middle;
   line-height: 50px;
  }
</style>

<script>
  export default {
    name: 'navbar',
    props:{
      title: {
        type: String,
        default: 'My ROM'
      },
      canBack:{
        type: Boolean,
        default: false
      },
      isLogin:{
        type: Boolean,
        default: false
      }
    },
    methods:{
      backToRoot(){
        console.log('back to root')
      },
      back(){
        this.$f7router.back()
      },
      logon(){
        console.log('logon')
      },
      login(){
        console.log('login')
      }
    }
  }
</script>
