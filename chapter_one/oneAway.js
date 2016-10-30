// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.
//Given two strings, write a function to check if they are one/zero edits away. (Ex. pale pal → true, pale bayl → false)

function oneAway(str1, str2) {
  //if length is unequal check for deletion / insertion possbility
  let longerStr, shorterStr;
  if (str1.length !== str2.length) {
    if (str1.length > str2.length) {
      longerStr = str1;
      shorterStr = str2;
    } else {
      longerStr = str2;
      shorterStr = str1;
    }

    let distance = Math.abs(str1.length - str2.length);
    if (distance > 2) return false;
    //also need to check the difference between the chars
    for (let i=0; i<Math.min(str1.length, str2.length); i++) {
      let newStr = "";
      if (longerStr[i] !== shorterStr[i]) {
        newStr = shorterStr.slice(0, i) + longerStr[i] + shorterStr.slice(i);
        if (newStr === longerStr) return true;
        if (newStr !== longerStr) return false;
      }
    }
  }

  //if strings are the same length, check to make sure sorted chars ar e the same length
  str1 = str1.toLowerCase().split('').sort();
  str2 = str2.toLowerCase().split('').sort();
  for (let i=0; i<str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }

  //if all cases pass return true
  return true;
}

