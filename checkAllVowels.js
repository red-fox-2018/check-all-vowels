function cekvowel(kata){
    var arr = 'aiueo';

    var count = 0;
    for(var i=0;i<arr.length;i++){
        for(var k=0;k<kata.length;k++){
            if(arr[i]==kata[k]){
                count++
            }
        }
    }
    if(count==kata.length){
        return true
    }
    return false
}

console.log(cekvowel('abjad')); //false
console.log(cekvowel('aaaaaa')); //true
console.log(cekvowel('aiueo')); //true
