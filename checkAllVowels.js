function checkVowel(string) {
  var isVowel = true;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 'a' || string[i] == 'i' || string[i] == 'u' || string[i] == 'e' || string[i] == 'o') {
      isVowel = true;
    } else {
      isVowel = false;
    }
  }
  if (isVowel == true) {
    return true;
  } else {
    return false;
  }
}

console.log(checkVowel('koran'));
console.log(checkVowel('aoi'))
