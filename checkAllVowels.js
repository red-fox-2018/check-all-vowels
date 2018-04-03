function isVowel(str) {
  var vowel = 'aiueo';
  var str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    var temp = false;
    for (var j = 0; j < vowel.length; j++) {
      if (str[i] === vowel[j]) {
        temp = true;
      }
    }
    if (!temp) {
      return false;
    }
  }
  return true;
}

console.log(isVowel('aUUUUiueo'));
console.log(isVowel('kamu aku dia mereka'));
