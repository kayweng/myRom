import Vue from 'vue'
import MonsterModel from '../../models/monsterModel';

const mutations = {
  setMonstersState(state, data){
    try{
      state.monsterList = []

      if(data !== null && data.length > 0){
        data.forEach(data => {
          let monster = new MonsterModel(data)
          state.monsterList.push(monster)
        })
      }
    }finally{
      localStorage.setItem('monsters', JSON.stringify(state.monsterList))
    }
  },
  setMonsterUrlState(state, data){
    try{
      state.monsterUrl = []

      if(data !== null && data.length > 0){
        data.forEach(data => {
          state.monsterUrl.push(data)
        })
      }
    }finally{
      localStorage.setItem('monsterUrls', JSON.stringify(state.monsterUrl))
    }
  }
}

export default mutations