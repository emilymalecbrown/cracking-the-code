// Write a method to replace all spaces in a string with '%20'

// using trim in all methods to remote leading and trailing whitespace

// using .split.join()
function urlify(str) {
  return str.trim().split(' ').join('%');
}

//using replace
function urlify2(str) {
  return str.trim().replace(/ /g, '%');
}

//using a loop
function urlify3(str) {
  str = str.trim();
  let newStr = "";
  for (let i=0; i<str.length; i++) {
    if (str[i] === " ") {
      newStr  += "%20";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

