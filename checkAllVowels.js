function checkAllVowels(string) {
  const vowels = 'aiueo'
  string = string.toLowerCase()
  for (var i = 0; i < string.length; i++) {
    let counter = 0
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] == vowels[j]) {
        break
      }
      counter++
    }
    if (counter >= 5) {
      return false
    }
  }
  return true
}
console.log(checkAllVowels('AiuEo'));
