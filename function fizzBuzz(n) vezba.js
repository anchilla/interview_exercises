function fizzBuzz(n) {
  let i;
    for(let i = 0; i <= n; i++){
      if((i%3) && (i%5)) console.log("FizzBuzz");
      else if (i % 3) console.log("fizz");
      else if (i % 5) console.log("buzz");
      else console.log(i);
    }
}
//fizzBuzz(15);

//Drugi test
//zasto je NAN? - u browseru, ovde ne daje nis
function isItMetagramm(arr_1, arr_2){
  if (arr_1.length !== arr_2.length) {
 return false;
}
  let differentLetter = 0;
for (let i = 0; i < arr_1.length; i++) {
 if (arr_1[i] !== arr_2[i]) {
     differentLetter++;
   if (differentLetter > 1) {
         return false; 
     }
  }
}
if (differentLetter === 1)
return differentLetter;
}


function solve(arr) {
let sum = 0; /*stavila sam samo let sum; a ne let sum = 0; mozda je zato Nan, ne 
moze lepo da sabere brojeve, nema na sta da doda
*/
let all = arr.flat();
//ovde neki for ili string length poredjenje
for(let i=0; i<all.length; i++){
for (let j = i + 1; j < all.length; j++) {
if (isItMetagramm(all[i], all[j])) {
        sum++;
     }
  }
}
console.log("moja metoda: "+sum);//stavila sam ga posle return, naravno da ga nema
return sum;
}

solve([["abg", "abj", "ahj"],
   ["ryj", "ryl", "rul", "wkh"],
   ["lok", "lov", "wbj", "wby", "wiy", "eiy"]]);



   //chat gpt
   function isMetagram(word1, word2) {
    if (word1.length !== word2.length) {
    return false; // Words must have the same length
    }
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
    diffCount++;
    if (diffCount > 1) {
    return false; // More than one letter differs
    }
    }
    }
    return diffCount === 1; // Exactly one letter should differ
    }
    function countMetagrams(array) {
    let metagramCount = 0;
    // Flatten the array of arrays into a single array of words
    let words = array.flat();
    // Compare each pair of words in the array
    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if (isMetagram(words[i], words[j])) {
        metagramCount++;
        }
        }
        }
        return metagramCount;
        }
        // Example usage:
        const wordsArray = [
        ['abg', 'abj', 'ahj'],
        ['ryj', 'ryl', 'rul', 'wkh'],
        ['lok', 'lov', 'wbj', 'wby', 'wiy', 'eiy']
        ];
        console.log(countMetagrams(wordsArray)); // Output: sum of metagrams