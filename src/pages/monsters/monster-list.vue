<template>
  <f7-page @page:init="onPageInit">
    <navbar :title="'Monsters Album'" :canBack="true">
      <f7-row slot="subnavbar" class="fluid">
        <f7-col tag="span"></f7-col>
        <f7-col tag="span">
          <f7-button raised outline round @click="openFilter = true">Filters</f7-button>
        </f7-col>
        <f7-col tag="span"></f7-col>
      </f7-row>
    </navbar>
    <pre-loader :isLoading="loadingIndicator"></pre-loader>
    <f7-block>
      <f7-row v-for="(monster,index) in monsters" :key="index">
        <f7-col width="25">
          <monster-cell :monster="monster[0]" @detail="viewMonsterInfo"></monster-cell>
        </f7-col>
        <f7-col width="25">
          <monster-cell :monster="monster[1]" @detail="viewMonsterInfo"></monster-cell>
        </f7-col>
        <f7-col width="25">
          <monster-cell :monster="monster[2]" @detail="viewMonsterInfo"></monster-cell>
        </f7-col>
        <f7-col width="25">
          <monster-cell :monster="monster[3]" @detail="viewMonsterInfo"></monster-cell>
        </f7-col>
      </f7-row>
    </f7-block>
    <monster-filter :open="openFilter"  @reset="resetMonsterList" @updated="updatedMonsterFilter"></monster-filter>
  </f7-page>
</template>

<style scoped>
  .block{
    margin-top: 25px !important;
  }

  p{
    margin-top: 7px !important;
    margin-bottom: 7px !important;
  }
</style>

<script>
  import NavigationBar from '../components/navigationBar.vue'
  import MonsterCell from './components/monster-cell.vue'
  import MonsterFilter from './components/monster-filter.vue'
  import MonsterMixin from '../../mixins/monsterMixin.js'
  import { mapActions } from 'vuex'

  export default {
    components:{
      [NavigationBar.name]: NavigationBar,
      [MonsterCell.name]: MonsterCell,
      [MonsterFilter.name]: MonsterFilter
    },
    data(){
      return {
        _allData: [],
        monsters: [],
        loadingIndicator: true,
        openFilter: false,
      }
    },
    mixins: [MonsterMixin],
    methods:{
      ...mapActions(['retrieveMonsters','retrieveMonsterPhotos']),
      onPageInit(){
        var self = this

        self.retrieveMonsters().then(response =>{
            var result = response

            if(result){
              self._allData = result
              self.generateRowData(result, 4)
            }

            self.loadingIndicator = false
          })
      },
      generateRowData(array, n){
        var i = 0
        var max = array.length
        var rowData = []

        this.monsters = []

        array.forEach(element => {
          if((i%n == 0 || rowData.length == 4) && rowData.length > 0){
            this.monsters.push(rowData)
            rowData = []
          }

          rowData.push(element)
          i++

          if(i == max && rowData.length > 0){
            this.monsters.push(rowData)
            return
          }
        })
      },
      resetMonsterList(){
        this.openFilter = false
        this.monsters = this._allData
        this.generateRowData(this.monsters, 4)
      },
      updatedMonsterFilter(monster){
        this.openFilter = false
        this.generateRowData(monster, 4)
      },
      viewMonsterInfo(monster){
        if(monster){
          console.log(monster.info.name)
          this.$f7router.navigate('/monster-info/' + monster.info.name)
        }
      }
    }
  }
</script>
