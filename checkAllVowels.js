function checkAllVowels(str) {
    let vowels = 'aiueo';
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i].toLowerCase() === vowels[j]) counter++;
        }
    }

    return counter === str.length;
}

console.log(checkAllVowels('aaaaAE')); // true
console.log(checkAllVowels('sdmau')); // false
console.log(checkAllVowels('aiueo')); // true