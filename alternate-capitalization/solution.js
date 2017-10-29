function capitalize (s) {
  var newString = '';
  var otherString = '';
  for (let i = 0; i < s.length; i++) {
    newString += i % 2 !== 0 ? s.charAt(i).toUpperCase() : s.charAt(i);
    otherString += i % 2 === 0 ? s.charAt(i).toUpperCase() : s.charAt(i);
  }
  return [otherString, newString];
}
capitalize();
