
import { storage } from '../configs/firebaseConfig'

Array.prototype.remove = function(item){

  let index = this.indexOf(item)

  if (index > -1) {
    this.splice(index, 1)
  }
}

function getStorageImageUrl(fileName){
 
  return new Promise((resolve, reject)=>{
    storage.ref(`monsters/${fileName}.png`).getDownloadURL().then(function(url){
      resolve(url)
    }).catch(error =>{
      switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        //reject('File doesn`t exist')
        break;
  
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        //reject('Unauthorized Access')
        break;
  
      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        //reject('Unknown error')
        break;
      }
    })
  })
}

function loadDataImageFromUrl(url, callback){
  
  var xhr = new XMLHttpRequest()

  xhr.onload = function() {
    
    var reader = new FileReader();
    
    reader.onloadend = function() {
      callback(reader.result);
    }
    
    reader.readAsDataURL(xhr.response);
  };
    
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

export { 
  getStorageImageUrl,
  loadDataImageFromUrl 
}