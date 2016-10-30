function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase().split('').sort();
  str2 = str2.toLowerCase().split('').sort();
  if (str1.length !== str2.length) return false;
  for (let i=0; i<str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }
  return true;
}

