# check-all-vowels
# PSEUDOCODE
- CREATE function checkAllVowels with parameter string
-   INITIALIZE vowels to 'aiueo'
-   INITIALIZE counter for check how many vowels in string
-   LOOP from 0 to str length and plus one every iteration
-       LOOP from 0 to vowels length and plus one every iteration
-           IF str[i] lowercase equal to vowels[j], add 1 to counter
-   RETURN counter equal to str length. If the counter and str length have same value true, else false