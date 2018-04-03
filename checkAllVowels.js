/*
*PSEUDOCODE
*
*CREATE FUNCTION checkVowel WITH PARAMETER = 'words'
*> CREATE ARRAY VARIABLE vocals = 'a','i','u','e','o'
*> CREATE VARIABLE counter = 0 
*> DO LOOPS 'words' FROM INDEX 0 UNTIL 'words' LENGTH
*>> DO LOOPS 'vocals' FROM INDEX 0 UNTIL 'vocals' LENGTH
*>> IF 'words' INDEX VALUE EQUAL WITH 'vocals' INDEX VALUE
*>> THEN counter + 1
*> IF 'words' LENGTH EQUAL WITH counter
*> THEN RETURN true
*> ELSE
*> RETURN false
*/

function checkVowel(words) {

    let vocals = ['a','i','u','e','o']
    let counter = 0

    for (let i = 0; i < words.length; i++) {
        
        for (let j = 0; j < vocals.length; j++) {
            
            if (words[i] === vocals[j]) {
                
                counter += 1
            }
        }
    }

    if (counter === words.length) {
        
        return true
    } else {

        return false
    }
}

console.log(checkVowel('aiueo'));
console.log(checkVowel('aaa'))
console.log(checkVowel('abc'));

