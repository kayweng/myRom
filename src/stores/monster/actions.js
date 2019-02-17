import Vue from 'vue'
import firebase from 'firebase'

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
          results.sort(function(a,b){
            return parseInt(a.info.level) - parseInt(b.info.level)
          })

          commit('setMonstersState', results)

          resolve(results)
        })
      }else{
        results = JSON.parse(localStorage.getItem('monsters'))
        resolve(results)
      }      
    }, error => {
      console.log(error)
    })
  }
}

export default actions