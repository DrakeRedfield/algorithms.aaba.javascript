/*
  Problem:
  You’re given a string s and an array of strings words. All the strings in words are of the same length.
  Write a function to find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.
*/ 

export function findIndexConcatenation(phrase: string, words: string[]) {
  if(!words.length) return [];
  const frequency = new Map();

  words.forEach(word => {
    frequency.set(word, (frequency.get(word) || 0) + 1)
  });
  
  const wordLength = words[0].length;
  const windowSize = wordLength*words.length;
  const results = [];

  for (let index = 0; index < phrase.length - windowSize; index++) {
    const seenWords = new Map();
    const substring = phrase.slice(index, index+windowSize);
    let start = 0;
    let end = wordLength;

    while (end <= substring.length) {
      const currentWord = substring.slice(start, end);
      if(!frequency.has(currentWord)) break;
      seenWords.set(currentWord, (seenWords.get(currentWord) || 0) + 1);
      if(seenWords.get(currentWord) > frequency.get(currentWord)) break;
      start += wordLength;
      end += wordLength;
    }
    if((end-wordLength) === substring.length) results.push(index);
  }

  return results;
}

// const s = "barfoothefoobarman";
// const words = ["foo", "bar"];
// Output: [0,9]
// Explanation:
// Substrings starting at index 0 ("barfoo") and index 9 ("foobar") are valid concatenations.