import firebase from 'firebase'
import { getStorageImageUrl, loadDataImageFromUrl } from '../../scripts/util'

const actions = {

  retrieveMonsters({commit}){
    return new Promise((resolve, reject) =>{
      var results = []

      if(localStorage.getItem('monsters') === null){
        var db = firebase.database()
        var monstersRef = db.ref('monsters')
        
        monstersRef.once('value').then(function(snapshot){
          snapshot.forEach(function(child){
            results.push(child.val())
          })
          
          //sort by level(default)
          // results.sort(function(a,b){
          //   return parseInt(a.info.level) - parseInt(b.info.level)
          // })

          commit('setMonstersState', results)

          resolve(results)
        })
      }else{
        results = JSON.parse(localStorage.getItem('monsters'))
        commit('setMonstersState', results)
        resolve(results)
      }      
    }, error => {
      console.log(error)
    })
  },
  retrieveMonsterPhotos({commit}){
    return new Promise((resolve, reject)=>{
      var results = []

      if(localStorage.getItem('monsterUrls') === null){
        var db = firebase.database()
        var monstersUrlRef = db.ref('monsterUrl')
        
        monstersUrlRef.once('value').then(function(snapshot){
          snapshot.forEach(function(child){
            results.push(child.val())
          })

          commit('setMonsterUrlState', results)

          resolve(results)
        })
      }else{
        results = JSON.parse(localStorage.getItem("monsterUrls"))
      }      
    }, error => {
      console.log(error)
    })
  }
}

export default actions