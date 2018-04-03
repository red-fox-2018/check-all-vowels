/*jshint esversion:6*/

function checkAllVowels(string) {
  let str = string.toLowerCase().split('');

  for (let i = 0; i < str.length; i++) {
    if (!checkVowels(str[i])) {
      return false;
    }
  }
  return true;
}

function checkVowels(string) {
  let vowel = ['a', 'i', 'u', 'e', 'o'];
  for (let i = 0; i < vowel.length; i++) {
    if (string == vowel[i]) {
      return true;
    }
  }
  return false;
}

console.log(checkAllVowels('aiueo')); //true
console.log(checkAllVowels('aiuEo')); //true
console.log(checkAllVowels('aiueob')); //false
console.log(checkAllVowels('aIuEocx')); //false
console.log(checkAllVowels('aaeaeieiaei')); //true
console.log(checkAllVowels('aaeaeieiaeiaieaieibueo')); //false
