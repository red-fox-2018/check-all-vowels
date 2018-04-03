function checkVowels(kata) {
  var vokal=['a','i','u','e','o'];
  
  for(var i=0;i<vokal.length;i++) {
  	for(var j=0;j<kata.length;j++) {
  		if(vokal[i]===kata[j]){
  			return true
  		}	
  	}
  }

return false;

}


console.log(checkVowels('aldo'));
console.log(checkVowels('fani'));
console.log(checkVowels('xyz'));