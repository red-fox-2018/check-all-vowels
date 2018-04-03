function checkVowels(str) {

  const vocals = 'aiueo'

  for (var i = 0; i < str.length; i++) {

    if (vocals.indexOf(str[i]) == -1) {

      return false

    }

  }

  return true

}
