<template>
  <f7-card v-if="data !== undefined">
    <!-- <img :src="imageUrl" :alt="data.info.name"> -->
    <label for="">{{ data.info.name}}</label>
    <label for="">{{ data.info.element}}</label>
    <label for="">{{ data.info.size}}</label>
    <label for="">{{ data.info.race}}</label>
    <label for="">{{ data.info.level}}</label>
    <label for="">{{ data.info.type}}</label>
  </f7-card>
</template>

<style scoped>
  .card{
    width: 80px !important;
    height: 80px !important;
    margin: 0 !important;
    margin-bottom: 16px !important;
  }

  .img{
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import { storage } from '../../../configs/firebaseConfig.js'

  export default {
    name: 'monster-card',
    props:{
      data: Object
    },
    data(){
      return {
        imageUrl: null
      }
    },
    created(){
      //this.getMonsterImage(this.data.info.name)
    },
    methods:{
      getMonsterImage(name){
        var self = this
        var fileName = name.toLowerCase()
        fileName = fileName.replace(/★/g,'')
        fileName = fileName.replace(/ /g,'_')
        fileName = fileName.replace(/,/g,'')

        if(fileName.substr(fileName.length -1, 1) === '_'){
          fileName = fileName.substr(0, fileName.length - 1)
        }
        
        storage.ref(`monsters/${fileName}.png`).getDownloadURL().then(function(url){
          
         self.imageUrl = url
        }).catch(error =>{
          switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;

          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
          }
        })
      }
    }
  }
</script>
