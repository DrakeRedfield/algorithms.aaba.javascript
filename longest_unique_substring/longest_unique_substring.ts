function longestUniqueSubstring(str) {
  const auxHash = new Map();
  let maxLength = 0;
  for(let char of str) {
    if(auxHash.has(char)) {
      if(auxHash.size > maxLength) maxLength = auxHash.size;
      auxHash.clear();
      auxHash.set(char, true);
    }
    auxHash.set(char, true);
  }
  return maxLength;
}

const sol1 = longestUniqueSubstring("abcabcbb");
const sol2 = longestUniqueSubstring("bbbbb");
const sol3 = longestUniqueSubstring("pwwkew");

console.log(`Result 1: ${sol1}`); // Expected 3 abc
console.log(`Result 2: ${sol2}`); // Expected 1 b
console.log(`Result 3: ${sol3}`); // 3 wke