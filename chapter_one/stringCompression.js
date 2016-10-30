// Implement a method to perform basic string compression using the counts of repeated characters.
//For example, the string aabcccccaaa would become a2b1c5a3
//If the "compressed" string would not become smaller than the original string, your method should return the original string.

function compress(str) {
  let newStr = "";
  let count = 1;
  for (let i=0; i<str.length; i++) {
    if (str[i] === str[i+1]) {
      count += 1;
    } else {
      newStr += str[i] + count;
      count = 1;
    }
  }
  if (newStr.length >= str) {
    return str;
  }
  return newStr;
}

// this function compresses all the characters (regardless of their place in the string)
function compressAll(str) {
  let strArr = str.split('');
  let charDict = {};
  for (let i=0; i<strArr.length; i++) {
    if (charDict[strArr[i]]) {
      charDict[strArr[i]] += 1;
    } else {
      charDict[strArr[i]] = 1;
    }
  }
  let newStr = "";
  for (var key in charDict) {
    newStr+=key;
    newStr+=charDict[key];
  }
  if (newStr.length >= str) {
    return str;
  }
  return newStr;
}
