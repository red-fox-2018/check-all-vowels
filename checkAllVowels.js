function cekVowel(string){
  let vokals = ['a','i','u','e','o']
  let arrResult = []

  for(let i=0; i<string.length; i++){
    let cekPerHuruf = vokals.indexOf(string[i])
    arrResult.push(cekPerHuruf)
  }
  // return arrResult
  let cekMin1 = arrResult.indexOf(-1)
  // console.log(cekMin1)
  if(cekMin1 === -1){
    return true
  }
  else {
    return false
  }
}

console.log(cekVowel('astring')) //false
console.log(cekVowel('aiueoaiu')) //true
