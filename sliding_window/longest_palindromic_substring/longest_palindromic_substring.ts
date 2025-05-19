function longestPalindromicSubstring(str) {
  const maxWindowSize = str.length;
  const palindromArr = [];
  for (let size = maxWindowSize; size > 0; size--) {
    if(size == 1) return str.split('');
    const maxTravel = Math.floor(size / 2);
    const maxWindowMoves = (maxWindowSize - size + 1);
    for (let move = 0; move < maxWindowMoves; move++) {
      let isPalindrom = true;
      const start = 0 + move;
      const end = size + start;
      let index = 0;
      do {
        if (str[start+index] !== str[end-index-1]) {
          isPalindrom = false;
        }
        index++;
      } while (index < maxTravel && str[start + index] === str[end - index - 1]);
      if (isPalindrom) {
        palindromArr.push(str.slice(start, end));
      }
    }
    if (palindromArr.length) {
      return palindromArr;
    }
  }
  return palindromArr;
}

const sol1 = longestPalindromicSubstring("babad");
const sol2 = longestPalindromicSubstring("cbbd");

console.log(`Result 1: ${sol1}`); // Expected ['bab', 'aba']
console.log(`Result 2: ${sol2}`); // Expected ['bb']