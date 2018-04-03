
function checkVowels(string){
  let vocals = 'aiueo'
  for(let i = 0; i < string.length; i++){
    if(vocals.indexOf(string[i].toLowerCase()) !== -1){
      return true;
    }
  }
  return false;
}

console.log(checkVowels('aiueo'));
console.log(checkVowels('qwrty'));
console.log(checkVowels('AUOOO'));
