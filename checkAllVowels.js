function checkVowel(str) {
  let arrVocal = ['a', 'e', 'i', 'o', 'u'];
  let temp = 0;
  str = str.toLowerCase();
  for (let i of str) {
    for (let j of arrVocal) {
      if (i === j) {
        temp++
      }
    }
  }
  return temp === str.length
}

console.log(checkVowel('aeiou'));
console.log(checkVowel('faipmardoni'));
