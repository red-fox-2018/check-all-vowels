# check-all-vowels

FUNCTION checkAllVowels parameter STRING
  SET  STR = STRING ubah ke huruf kecil dan STRING dipisahkan dengan ''

  LOOP index i = 0, index i kurang dari panjang STR, dengan increment satu
    IF bukan FUNCTION checkVowels STR index i
      RETURN FALSE
    END IF
  END LOOP
  RETURN TRUE
END FUNCTION

FUNCTION checkVowels parameter STRING
  SET VOWEL sama dengan array nilainya 'a', 'i', 'u', 'e', 'o'
  LOOP index i = 0, index i kurang dari panjang VOWEL, dengan increment satu
    IF STRING sama dengan dari VOWEL index i
      RETURN TRUE
    END IF
  END LOOP
  RETURN FALSE
END FUNCTION
