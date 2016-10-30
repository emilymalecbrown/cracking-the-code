//Given a string, write a function to check if it is a permutation of a palindrome. (Ex: input Tact Coa, output: true (taco cat))

function palindromicPermutation(str) {
  str = str.toLowerCase().replace(" ", "");
  let list = {};
  for (let i=0; i<str.length; i++) {
    if (list[str[i]]) {
      list[str[i]] += 1;
    } else {
      list[str[i]] = 1;
    }
  }
  let numberOfOdds = 0;
  for (let key in list) {
    if (list[key] % 2 !== 0) {
      numberOfOdds++;
    }
  }
  if (numberOfOdds > 1) return false;
  return true;
}

console.log(palindromicPermutation('Taco cat'));
console.log(palindromicPermutation('tacattt'))
console.log(palindromicPermutation('this is the day'));

