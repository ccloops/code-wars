function formatWords(words){
  if (!words) return '';

  return words.filter(function(allwords) {
    return allwords !== ''}).join(', ')
    .replace(/(, )+(\S+)$/, ' and $2');

}

formatWords();
