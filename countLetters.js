const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function input to be sentence as a string
// function return to be count of each of the letters in that sentence as an object


const countLetters = function (statement) {
  let results = {};
  statement = statement.trim(); //eliminates any whitespaces before or after string statement.
  statement = statement.replace(/\s/g, ""); //eliminates any space between letters


  //we will use a for..of loop instead of for...in because in a for...of loop the variable letter receives the characters directly whereas in the for...in loop the variable letter receives the index of the string character.

  for (const letter of statement) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

//test code

const statement = "    lighthouse in the house   ";

assertEqual(countLetters(statement)["e"], 3); //[pass]
assertEqual(countLetters(statement)["h"], 4); //[pass]
assertEqual(countLetters(statement)[" "], undefined); //checks for white spaces between letters. Should pass by resulting in undefined.

console.log(countLetters(statement));
console.log(countLetters("saimisastudentatLHL"));


