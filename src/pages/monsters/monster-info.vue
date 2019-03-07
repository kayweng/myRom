<template>
  <f7-page @page:init="onPageInit" class="monster-info">
    <navbar :title="monster.info.name" :canBack="true"></navbar>
    <f7-block>
      <f7-row class="skeleton-text skeleton-effect-fade">
        <f7-col width="30">
          <monster-image :name="monster.info.name"></monster-image>
        </f7-col>
        <f7-col class="label" width="30">
          <div>Level :</div>
          <div>HP: </div>
          <div>Base Exp  :</div>
          <div>Job Exp  :</div>
        </f7-col>
        <f7-col class="data" width="40">
          <div>{{ monster.info.level}}</div>
          <div>{{ monster.attributes.hp}}</div>
          <div>{{ monster.info.baseExp}}</div>
          <div>{{ monster.info.jobExp}}</div>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col class="elements" width="30">
          <img class="element-icon" :src="`./static/images/elements/${monster.info.element.toLowerCase()}.png`" :alt="monster.info.element ">
          <span class="bold" :class="monster.info.element.toLowerCase()">{{ monster.info.element }}</span>
        </f7-col>
        <f7-col width="70">&nbsp;</f7-col>
      </f7-row>
    </f7-block>
    <!-- Info -->
    <f7-block-title>Info</f7-block-title>
    <f7-list>
      <f7-list-item title="Type" :after="monster.info.type"></f7-list-item>
      <f7-list-item title="Zone" :after="monster.info.zone"></f7-list-item>
      <f7-list-item title="Race" :after="monster.info.race"></f7-list-item>
      <f7-list-item title="Size" :after="monster.info.size"></f7-list-item>
    </f7-list>
    <!-- Attributes -->
    <f7-block-title>Attributes</f7-block-title>
    <f7-list>
      <f7-list-item title="Attack" :after="monster.attributes.atk"></f7-list-item>
      <f7-list-item title="M.Attack" :after="monster.attributes.matk"></f7-list-item>
      <f7-list-item title="Def" :after="monster.attributes.def"></f7-list-item>
      <f7-list-item title="M.Def" :after="monster.attributes.mdef"></f7-list-item>
      <f7-list-item title="Hit" :after="monster.attributes.hit"></f7-list-item>
      <f7-list-item title="Flee" :after="monster.attributes.flee"></f7-list-item>
      <f7-list-item title="Move Speed" :after="monster.attributes.moveSpeed"></f7-list-item>
      <f7-list-item title="Attack Speed" :after="monster.attributes.atkSpeed"></f7-list-item>
    </f7-list>
    <!-- Drops -->
    <f7-block-title v-if="monster.drops != undefined && monster.drops.length > 0">Drops</f7-block-title>
    <f7-list v-if="monster.drops != undefined && monster.drops.length > 0">
      <f7-list-item v-for="(item, index) in monster.drops" :key="index">
        <f7-row class="fluid item-row">
          <f7-col width="15">
            <img class="item-icon" :src="getItemIcon(item.name)" />
          </f7-col>
          <f7-col width="65">
            <label class="truncate">{{ item.name }}</label>
          </f7-col>
          <f7-col width="20">
            <div class="right">{{ item.rate }}</div>
          </f7-col>
        </f7-row>
      </f7-list-item>
    </f7-list>
    <!-- Locations -->
    <f7-block-title v-if="monster.locations !== undefined && monster.locations.length > 0">Locations</f7-block-title>
    <f7-list v-if="monster.locations !== undefined && monster.locations.length > 0">
      <f7-list-item :title="location.name" :link="`/maps/${location.mapId}`" v-for="(location, index) in monster.locations" :key="index">
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<style scoped>
  .monster-info{
    font-size: small !important;
  }

  .label{
    text-align: right;
    padding-top: 4px;
  }

  .data{
    font-weight: bold;
    padding-top: 4px;
  }

  .label > div, 
  .data >div{
    padding-bottom: 4px;
  }
  
  .item-row{
    height: 30px;
    min-height: 30px;
    max-height: 30px;
  }

  .item-row > div > *{
    vertical-align: middle;
    line-height: 30px;
    font-size: small !important;
  }

  .item-row > div:first-child{
    padding-right: 8px;
  }

  .item-row > div:nth-last-child(){
    text-align: right;
  }

  .elements > *{
    line-height: 24px;
    vertical-align: middle;
    margin-left: 4px;
  }

  .element-icon{
    border-radius: 50%;
    margin-left: 8px;
    width: 24px;
    height: 24px;
  }
</style>

<script>
  import NavigationBar from '../components/navigationBar.vue'
  import MonsterImage from './components/monster-image.vue'
  import MonsterMixin from '../../mixins/monsterMixin.js'

  export default {
    name: 'monster-info',
    components:{
       [NavigationBar.name]: NavigationBar,
       [MonsterImage.name]: MonsterImage
    },
    props:{
      param: String
    },
    mixins: [MonsterMixin],
    data(){
      return {
        monster: Object,
      }
    },
    methods:{
      onPageInit(){

      }
    },
    created(){
      var self = this

      if(self.param != null && self.$store.state.monster.monsterList != null){
        self.monster = self.$store.state.monster.monsterList.find(function(element){
          return element.info.name == self.param
        })
      }
    }
  }
</script>