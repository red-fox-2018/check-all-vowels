function checkVowels(string) {
	// body...
	var vocals = ['a','i','u','e','o'];
	var str = string.split('')
	for(var i=0;i<str.length;i++){
		var counter = 0
		for(var j=0;j<vocals.length;j++){
			if (vocals[i]===str[j]) {
				counter++
			}
		}
	}
	if (counter===0) {
		return false
	}
	return true
}
console.log(checkVowels('aieuo'));
console.log(checkVowels('america'));
console.log(checkVowels('qrtyp'));
	