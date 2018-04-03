

/*

@ Iswanul Umam - Red Fox
*/

let isVowel = function (c) {
  c = c.toLowerCase();
  return c == 'a' || c == 'i' || c == 'u' || c == 'e' || c == 'o';
}

function checkAllVowels(s) {
  let isAllVowel = true;
  for (let i of s) {
    if (!isVowel(i)) {
      isAllVowel = false;
    } 
  }
  return isAllVowel;
}

// driver code
console.log(checkAllVowels('AiUeO')); // true
console.log(checkAllVowels('aioeo')); // true
console.log(checkAllVowels('AIUEO')); // true
console.log(checkAllVowels('NotAllVowels')); // false