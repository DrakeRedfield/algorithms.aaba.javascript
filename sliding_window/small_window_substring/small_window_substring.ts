/*
Given two strings s and t, return the minimum window in s which contains all the characters in t. If there is no such window in s that covers all characters in t, return an empty string "".

Example
* Input: s = "ADOBECODEBANC", t = "ABC"
* Output: "BANC"

Constraints
  * Both s and t consist of only ASCII characters.
  * The answer must be the smallest window in s that contains all characters from t, including duplicates.
*/

const s = "ADOBECODEBANC";
const t = "ABC";

function smallestSubstring(str, value) {
  const frequency = new Map();
  for(let letter of value) {
    frequency.set((frequency.get(letter) || 0) + 1);
  }

  const minWindowSize = value.length;
  for(let size = minWindowSize; size <= str.length; size++) {
    const seenFrequency = new Map();
  }

}