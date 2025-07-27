function format(str) {
  return str.toLowerCase().split("").sort().join("");
}
function areAnagrams(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  if (format(str1) == format(str2)) {
    return true;
  }

  return false;
}

console.log(areAnagrams("listen", "silent"));
