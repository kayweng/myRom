<template>
  <f7-page @page:init="onPageInit">
    <navbar :title="'Monsters Album'" :canBack="true">
      <f7-row slot="subnavbar" class="fluid">
        <f7-col tag="span"></f7-col>
        <f7-col tag="span">
          <f7-button raised outline round @click="popupOpened = true">Filters</f7-button>
        </f7-col>
        <f7-col tag="span"></f7-col>
      </f7-row>
    </navbar>
    <pre-loader :isLoading="loadingIndicator"></pre-loader>
    <f7-block>
      <f7-row v-for="(monster,index) in monsters" :key="index">
        <f7-col width="25">
          <monster-card :data="monster[0]"></monster-card>
        </f7-col>
        <f7-col width="25">
          <monster-card :data="monster[1]"></monster-card>
        </f7-col>
        <f7-col width="25">
          <monster-card :data="monster[2]"></monster-card>
        </f7-col>
        <f7-col width="25">
          <monster-card :data="monster[3]"></monster-card>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-popup class="filters-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
       <f7-navbar>
          <f7-nav-left>
            <f7-link @click="uncheckAll" icon-if-ios="f7:refresh" icon-if-md="material:refresh"></f7-link>
          </f7-nav-left>
          <f7-nav-title>Filter By</f7-nav-title>
          <f7-nav-right>
            <f7-link @click="close" icon-if-ios="f7:close_round" icon-if-md="material:close_round"></f7-link>
          </f7-nav-right>
       </f7-navbar>
        <!-- Elements -->
        <f7-block-title>Elements</f7-block-title>
        <f7-list>
          <f7-list-item checkbox title="Earth" value="earth" name="element-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Fire" value="fire" name="element-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Ghost" value="ghost" name="element-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Neutral" value="neutral" name="element-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Poison" value="poison" name="element-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Shadow" value="shadow" name="element-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Undead" value="undead" name="element-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Water" value="water" name="element-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Wind" value="wind" name="element-checkbox"></f7-list-item>
        </f7-list>
        <!-- Size -->
        <f7-block-title>Size</f7-block-title>
        <f7-list>
          <f7-list-item checkbox title="Small" value="small" name="size-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Medium" value="medium" name="size-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Large" value="large" name="size-checkbox"></f7-list-item>
        </f7-list>
        <!-- Race -->
        <f7-block-title>Race</f7-block-title>
        <f7-list>
          <f7-list-item checkbox title="Plant" value="plant" name="race-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Insect" value="insect" name="race-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Fish" value="fish" name="race-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Brute" value="brute" name="race-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Demi-Human" value="demi-human" name="race-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Demon" value="demon" name="race-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Formless" value="formless" name="race-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Dragon" value="dragon" name="race-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Undead" value="undead" name="race-checkbox"></f7-list-item>
        </f7-list>
        <!-- Level -->
        <!-- <f7-block-title>Level</f7-block-title>
        <f7-list>
          <f7-list-item checkbox title="1 - 9" value="1-9" name="level-checkbox"></f7-list-item>
          <f7-list-item checkbox title="10 - 19" value="10-19" name="level-checkbox"></f7-list-item>
          <f7-list-item checkbox title="20 - 29" value="20-29" name="level-checkbox"></f7-list-item>
          <f7-list-item checkbox title="30 - 39" value="30-39" name="level-checkbox"></f7-list-item>
          <f7-list-item checkbox title="40 - 49" value="40-49" name="level-checkbox"></f7-list-item>
          <f7-list-item checkbox title="50 - 59" value="50-59" name="level-checkbox"></f7-list-item>
          <f7-list-item checkbox title="60 - 69" value="60-69" name="level-checkbox"></f7-list-item>
          <f7-list-item checkbox title="70 - 79" value="70-79" name="level-checkbox"></f7-list-item>
          <f7-list-item checkbox title="80 - 89" value="80-89" name="level-checkbox"></f7-list-item>
          <f7-list-item checkbox title="90 - 100" value=">90" name="level-checkbox"></f7-list-item>
        </f7-list> -->
        <!-- Types -->
        <f7-block-title>Types</f7-block-title>
        <f7-list>
          <f7-list-item checkbox title="Monster" value="monster" name="others-checkbox"></f7-list-item>
          <f7-list-item checkbox title="MVP" value="mvp" name="others-checkbox"></f7-list-item>
          <f7-list-item checkbox title="Mini Boss" value="mini boss" name="others-checkbox"></f7-list-item>
        </f7-list>
      </f7-page>
    </f7-popup>
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

  .icon{
    width: 25px;
    height: 25px;
  }

  .filter-row{
    padding: 0 0 16px 0;
  }
</style>

<script>
  import NavigationBar from '../components/navigationBar.vue'
  import MonsterCard from './components/monster-card.vue'
  import MonsterMixin from '../../mixins/monsterMixin.js'
  import { mapActions } from 'vuex'

  export default {
    components:{
      [NavigationBar.name]: NavigationBar,
      [MonsterCard.name]: MonsterCard
    },
    data(){
      return {
        _allData: [],
        monsters: [],
        loadingIndicator: true,
        popupOpened: false,
        filterOptions: null,
        checkBoxes : []
      }
    },
    mixins: [MonsterMixin],
    methods:{
      ...mapActions(['retrieveMonsters']),
      onPageInit(){
        this.clearFilterOptions()

        this.retrieveMonsters().then(response =>{
          var result = response

          if(result){
            this._allData = result
            this.generateRowData(result, 4)
          }

          this.loadingIndicator = false
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
      clearFilterOptions(){
        this.filterOptions = {
          element: [],
          size: [],
          race: [],
          level: [],
          type: []
        }
      },
      close(){
        if(this.filterOptions.element.length > 0 || this.filterOptions.size.length > 0 || 
          this.filterOptions.race.length > 0 || this.filterOptions.type.length > 0){
          this.filterMonsterList()
        }else{
          this.refreshMonsterList()
        }
        
        this.popupOpened = false
      },
      uncheckAll(){
        for (var i = 0; i < this.checkBoxes.length; i++) {
          this.checkBoxes[i].checked = false
        }

        this.clearFilterOptions()
      },
      filterMonsterList(){
        var self = this
        var monsters = []
        
        self.loadingIndicator = true

        //final
        this._allData.forEach(function(m){ 
          if(monsters.indexOf(m) > -1){
            return
          }

          if(self.filterOptions.element.length > 0 
            && self.filterOptions.element.indexOf(m.info.element.toLowerCase()) < 0){
            return
          }

          if(self.filterOptions.size.length > 0 
            && self.filterOptions.size.indexOf(m.info.size.toLowerCase()) < 0){
            return
          }

          if(self.filterOptions.race.length > 0 
            && self.filterOptions.race.indexOf(m.info.race.toLowerCase()) < 0){
            return
          }

          if(self.filterOptions.type.length > 0 
            && self.filterOptions.type.indexOf(m.info.type.toLowerCase()) < 0){
            return
          }
          console.log(m.info.name)
          monsters.push(m)
        })

        console.log(monsters.length)
      
        self.generateRowData(monsters, 4)
        self.loadingIndicator = false
      },
      refreshMonsterList(){
        this.monsters = this._allData
        this.generateRowData(this.monsters, 4)
      }
    },
    mounted(){
     
      var inputs = document.querySelectorAll('.item-checkbox')

      for (var i = 0; i < inputs.length; i++) {
        var checkbox = inputs[i].childNodes[0]
        var self = this

        checkbox.addEventListener( 'change', function() {
         
          let option = this.name.replace("-checkbox","")
          var filterArray = self.filterOptions[option]

          let foundEl = filterArray.find(element =>{
            return element == this.value
          })

          if(this.checked && !foundEl) {
            filterArray.push(this.value)
          } else if (foundEl) {
            filterArray.remove(this.value)
          }

          self.filterOptions[option] = filterArray
        })

        self.checkBoxes.push(checkbox)
      }
    }
  }
</script>
