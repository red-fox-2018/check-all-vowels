function checkVocals (str){
  var vocals = ['a','i','u','e','o'];
  var string = str.split('');

  for(var i =0 ; i < string.length ; i++){
    for(var j = 0 ; j < vocals.length ;j++){
      if(string[i]===vocals[j]){
        return true;
      }
    }
    return false;
  }


}


console.log(checkVocals('dbacdsdhfjksahfkjs'));
console.log(checkVocals('aaua'));
console.log(checkVocals('uueoaoi'));
console.log(checkVocals('dbacdsdhfjksahfkjs'));
