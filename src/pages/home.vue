<template>
  <f7-page>
    <navbar></navbar>
    <f7-list no-hairlines no-hairlines-between>
      <f7-list-item>
        <f7-row>
          <f7-col>
            <menu-card :title="'Monsters'" :image="'static/icons/monster.png'" :page="'/monster-list'"></menu-card>
          </f7-col>
          <f7-col>
            <menu-card :title="'Cards'" :image="'static/icons/card.png'" :page="'/monster-list'"></menu-card>
          </f7-col>
        </f7-row>
      </f7-list-item>
      <f7-list-item>
        <f7-row>
          <f7-col>
            <menu-card :title="'Maps'" :image="'static/icons/map.png'" :page="'/monster-list'"></menu-card>
          </f7-col>
          <f7-col>
            <menu-card :title="'Cooking'" :image="'static/icons/cooking.png'" :page="'/monster-list'"></menu-card>
          </f7-col>
        </f7-row>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<style scoped>
  .row{
    width: 100%;
  }
</style>

<script>
  import NavigationBar from '../pages/components/navigationBar.vue'
  import MenuCard from '../pages/components/menuCard.vue'

  export default {
    components:{
      [NavigationBar.name]: NavigationBar,
      [MenuCard.name]: MenuCard
    }
  }
</script>
