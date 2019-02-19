<template>
  <f7-popup class="filters-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
    <f7-page>
      <f7-navbar>
        <f7-nav-left>
          <f7-link @click="reset" icon-if-ios="f7:refresh" icon-if-md="material:refresh"></f7-link>
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
      <f7-block-title class="display-flex justify-content-space-between">Level
        <span>{{minLevel}} - {{maxLevel}}</span>
      </f7-block-title>
      <f7-block strong>
        <f7-range
            :min="1"
            :max="120"
            :step="5"
            :value="[minLevel, maxLevel]"
            :label="true"
            :dual="true"
            color="green"
            @range:change="onLevelChange"
          ></f7-range>
      </f7-block>
      <!-- Types -->
      <f7-block-title>Types</f7-block-title>
      <f7-list>
        <f7-list-item checkbox title="Monster" value="monster" name="type-checkbox"></f7-list-item>
        <f7-list-item checkbox title="MVP" value="mvp" name="type-checkbox"></f7-list-item>
        <f7-list-item checkbox title="Mini Boss" value="mini boss" name="type-checkbox"></f7-list-item>
      </f7-list>
    </f7-page>
  </f7-popup>
</template>

<style scoped>
  .filter-row{
    padding: 0 0 16px 0;
  }
</style>

<script>
  export default {
    name: "monster-filter",
    props: {
      allMonsters: Array,
      open: Boolean
    },
    data(){
      return {
        minLevel: 1,
        maxLevel: 120,
        filterOptions: null,
        checkBoxes : [],
        popupOpened: false
      }
    },
    watch:{
      open(value){
        this.popupOpened = value
      }
    },
    methods:{
      onLevelChange(values) {
        this.minLevel = values[0];
        this.maxLevel = values[1];
      },
      clearFilterOptions(){
        this.filterOptions = {
          element: [],
          size: [],
          race: [],
          type: []
        }

        this.minLevel = 1
        this.maxLevel = 120
      },
      reset(){
        for (var i = 0; i < this.checkBoxes.length; i++) {
          this.checkBoxes[i].checked = false
        }

        this.clearFilterOptions()
      },
      close(){
        if(this.filterOptions.element.length > 0 || this.filterOptions.size.length > 0 || 
          this.filterOptions.race.length > 0 || this.filterOptions.type.length > 0){
          this.filterMonsterList()
        }else{
          this.$emit("reset")
        }
        
        this.popupOpened = false
      },
      filterMonsterList(){
        var self = this
        var monsters = []
        
        //final
        this.allMonsters.forEach(function(m){ 
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

          if(self.minLevel > 0 && self.maxLevel < 130){
            var mLevel = parseInt(m.info.level)
            if(!(mLevel >= self.minLevel && mLevel <= self.maxLevel)){
              return
            }
          }
          
          monsters.push(m)
        })

        this.$emit("updated",monsters)
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

        self.clearFilterOptions();
      }
    }
  }
</script>
