import { longestPalindromicSubstring } from "./longest_palindromic_substring"

describe('Longest Palindrom', () => {
  it('Get all longest Palindrom from "babad"', () => {
    const result = longestPalindromicSubstring('babad');
    expect(result).toEqual(['bab', 'aba']);
  });

  it('Get all longest Palindrom from "cbbd"', () => {
    const result = longestPalindromicSubstring('cbbd');
    expect(result).toEqual(['bb']);
  });

  it('Get all longest Palindrom from "applppaldsbb"', () => {
    const result = longestPalindromicSubstring('applppaldsbb');
    expect(result).toEqual(['applppa']);
  });

  it('Must return every letter from "abcdefg"', () => {
    const result = longestPalindromicSubstring('abcdefg');
    expect(result).toEqual('abcdefg'.split(''));
  });

  it('Must return an empty list with empty string ""', () => {
    const result = longestPalindromicSubstring('');
    expect(result).toEqual([]);
  });
})