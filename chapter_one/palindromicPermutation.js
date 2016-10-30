//Given a string, write a function to check if it is a permutation of a palindrome. (Ex: input Tact Coa, output: true (taco cat))

function palindromicPermutation(str) {
  str = str.toLowerCase().replace(" ", "");
  //create a list of characters and their number of appearances in the string
  let list = {};
  for (let i=0; i<str.length; i++) {
    if (list[str[i]]) {
      list[str[i]] += 1;
    } else {
      list[str[i]] = 1;
    }
  }

  //check for how many odd characters there are => cannot be palindrome with more than one odd appearance
  let numberOfOdds = 0;
  for (let key in list) {
    if (list[key] % 2 !== 0) {
      numberOfOdds++;
    }
  }
  if (numberOfOdds > 1) return false;
  return true;
}
