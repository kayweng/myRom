
export default {
  methods: {
    getMonsterImage(name){
      var self = this
      var fileName = name.toLowerCase()

      fileName = fileName.replace(/★/g,'')
      fileName = fileName.replace(/ /g,'_')
      fileName = fileName.replace(/,/g,'')

      if(fileName.substr(fileName.length -1, 1) === '_'){
        fileName = fileName.substr(0, fileName.length - 1)
      }
      
      self.image = `./static/images/monsters/${fileName}.png`
    },
    getItemIcon(name){
      let itemName = name.toLowerCase()
      itemName = itemName.replace(/ /g,'_') //replace space to underscore

      if(itemName.indexOf('transformation_scroll') >= 0){
        itemName = "transformation_scroll"
      }else if(itemName.indexOf('zeny') >= 0){
        itemName = "zeny"
      }else if(itemName.indexOf('card') >= 0){
        itemName = "card"
      }else if(this.isMusicItem(itemName)){
        itemName = "disc"
      }else{
        let openBracket = itemName.indexOf('[')
        let closeBracket = itemName.indexOf(']')

        if(openBracket >= 0 && closeBracket >=0){
          itemName = itemName.substr(0, openBracket-1) + itemName.substr(closeBracket+1, itemName.length - closeBracket)
        }
      }

      return `./static/images/drops/${itemName}.png`
    },
    isMusicItem(itemName){
     
      return this.songs.find(function(name){
        return name.toLowerCase() == itemName.toLowerCase()
      })
    }
  }
}