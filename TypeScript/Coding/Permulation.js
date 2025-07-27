function getPermutations(str) {
  const results = [];

  function permute(path, remaining) {
    if (remaining.length === 0) {
      results.push(path);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = path + remaining[i];
      const leftover = remaining.slice(0, i) + remaining.slice(i + 1);
      permute(next, leftover);
    }
  }

  permute("", str);
  return results;
}

// Example
const input = "abc";
const permutations = getPermutations(input);
console.log(permutations);
// Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

/*
1. Initial Call:
  permute('', 'abc');

2. First Level:
    Loop over 'a', 'b', 'c'

    a. Pick 'a', remaining: 'bc'
    Call: permute('a', 'bc')

    b. Pick 'b', remaining: 'ac'
    Call: permute('b', 'ac')

    c. Pick 'c', remaining: 'ab'
    Call: permute('c', 'ab')

3. Second Level: Continue for each branch
    For permute('a', 'bc'):
    Pick 'b', remaining: 'c' → permute('ab', 'c')

    Pick 'c', remaining: 'b' → permute('ac', 'b')

    And so on…

*/
