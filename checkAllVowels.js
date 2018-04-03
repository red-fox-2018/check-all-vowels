function checkvowels(str){
    var notvocal="bcdfghjklmnpqrstvwxyz".split("")
    var temp=0
    for(var i=0; i<str.length; i++){
            temp+=(notvocal.indexOf(str[i]))
        
    }
    if(temp==(-str.length)){
        return true
    }
    else{
        return false
    }
}
console.log(checkvowels("aiueaiueao"))