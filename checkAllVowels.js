function checkVowel (sentence) {
    var vocal = ['a','i','u','e','o']

    for (var i = 0; i < sentence.length; i++) {
        if(vocal.indexOf(sentence[i]) === -1)
        return false
    }
    return true
}

console.log(checkVowel('aiueo')) // true
console.log(checkVowel('oeuia')) // true
console.log(checkVowel('abcde')) // false
console.log(checkVowel('bcdfgh')) // false
console.log(checkVowel('aaaaaaa')) // true
console.log(checkVowel('oiaokeau')) // false
