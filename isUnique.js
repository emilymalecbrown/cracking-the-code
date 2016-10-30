//ensure that a string contains all unique chars without using additional data structures

// iterate through string indicies and split str on that index
// ensure that char at index not included in either substring
function isUnique(str) {
  for (let i=0; i<str.length; i++) {
    if (str.substring(0, i-1).indexOf(str.charAt(i)) > -1 || str.substring(i+1, str.length).indexOf(str.charAt(i)) > -1) {
      return false;
    }
  }
  return true;
}

// simpler
function isUniq(str) {
  for (let i=0; i<str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}
