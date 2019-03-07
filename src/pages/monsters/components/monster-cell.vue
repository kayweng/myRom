<template>
  <div class="cell" :key="monster.info.name" v-if="monster !== undefined" @click="selectMonster">
    <monster-image :name="monster.info.name"></monster-image>
  </div>
</template>

<style scoped>
  .cell{
    margin-bottom: 4px;
  }
</style>

<script>
  import { mapActions } from 'vuex'
  import MonsterImage from './monster-image.vue'
  import MonsterMixin from '../../../mixins/monsterMixin.js'

  export default {
    name: 'monster-cell',
    components:{
      [MonsterImage.name]: MonsterImage
    },
    props:{
      monster: Object
    },
    mixins: [MonsterMixin],
    data(){
      return {
        image: null
      }
    },
    created(){
      if(typeof this.monster !== "undefined" && this.monster !== null && this.monster.info !== undefined){
        this.getMonsterImage(this.monster.info.name)
      }
    },
    methods:{
      selectMonster(){
        this.$emit('detail', this.monster)
      }
    }
  }
</script>
