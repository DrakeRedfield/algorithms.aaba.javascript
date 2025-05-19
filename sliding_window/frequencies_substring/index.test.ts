import { findIndexConcatenation } from "./frequencies_substring";

describe('Index Concatenation for "barfoothefoobarman"', () => {
  const s = "barfoothefoobarman";
  it('Should return the index of words concatenation "foo" and "bar"', () => {
    const words = ["foo", "bar"];
    expect(findIndexConcatenation(s, words)).toEqual([0,9]);
  });

  it('Should return the index of words concatenation "foo" and "the"', () => {
    const words = ["foo", 'the'];
    expect(findIndexConcatenation(s, words)).toEqual([3, 6]);
  });

  it('Should return empty index list of  words concatenation "foo" and "man"', () => {
    const words = ["foo", 'man'];
    expect(findIndexConcatenation(s, words)).toEqual([]);
  });

  it('Should return empty index list of  words concatenation "foo" and "foo"', () => {
    const words = ["foo", 'foo'];
    expect(findIndexConcatenation(s, words)).toEqual([]);
  });

  it('Not having words to concatenate, should return an empty list', () => {
    const words: string[] = [];
    expect(findIndexConcatenation(s, words)).toEqual([]);
  });
});