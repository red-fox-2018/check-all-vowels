function checkVowels(str) {
  let vocals = ['a', 'i', 'u', 'e', 'o']
  str = str.toLowerCase();
  for(let i in vocals) {
    for(var j = 0; j < str.length; j++) {
      if(vocals[i] === str[j]) {
        return true
      }
    }
  }
  return false
}

console.log(checkVowels('aaaiiioo'));
console.log(checkVowels('acha'));
console.log(checkVowels('AAAOOO'));
