<template>
  <div class="monster-image">
    <img :src="image || $defaultMonsterImage" :alt="name" @error="show_default" />
  </div>
</template>

<style scoped>
  img{
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import MonsterMixin from '../../../mixins/monsterMixin.js'

  export default {
    name: 'monster-image',
    props:{
      name: String
    },
    mixins: [MonsterMixin],
    data(){
      return {
        image: null
      }
    },
    created(){
      if(this.name != undefined && this.name.length > 0){
        this.getMonsterImage(this.name)
      }
    }
  }
</script>