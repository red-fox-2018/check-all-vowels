function checkVowel(str){
    for(let i=0;i<str.length;i++){
        if('aiueo'.indexOf(str[i].toLowerCase())==-1){
            return false
        }
    }
    return true
}

console.log(checkVowel('tahu bulat'));
console.log(checkVowel('wyshz'));
console.log(checkVowel('aaaaiiiii'))
console.log(checkVowel('aiuOOOeo'));


