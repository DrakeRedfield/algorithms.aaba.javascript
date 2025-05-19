/*
  Problem:
  You’re given a string str of length n.
  Write a function to find all the longest palindromes from str.
  A Palindrome is a word that you can read the same backward and frontward.
*/ 

export function longestPalindromicSubstring(str: string) {
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
