// Write a function that takes a list of words as input, and returns a list
// of those words bucketized by anagrams with duplicates removed
// Input ["star", "rats", "car", "arc", "arts", "rats", "bar"]
// Output [["star", "rats", "arts"], ["car", "arc"], ["bar"]]
const assert = require('assert');

// Complexity O(n * log n)
function bucketizeAnagrams(input) {
  const uniqueList = new Set(input);
  const anagramsBuckets = {};

  for (let word of uniqueList) {
    const anagramKeys = Object.keys(anagramsBuckets);
    let hasAnagram = false;

    for (const key of anagramKeys) {
      if (word !== key && checkAnagram(word, key)) {
        hasAnagram = true;
        anagramsBuckets[key].push(word);
        uniqueList.delete(word);
      }
    }

    if (!anagramKeys.length || !hasAnagram) {
      anagramsBuckets[word] = [word];
    }
  }


  return Object.values(anagramsBuckets);
}

function checkAnagram (str1, str2) {
  return [...str1.toLowerCase()].every((char) => str2.toLowerCase().includes(char));
}

function testAnagrams() {
  assert.strictEqual(checkAnagram('star', 'rats'), true, 'check anagrams isn\'t workin as expected');
  assert.strictEqual(checkAnagram('star', 'void'), false, 'check anagrams isn\'t workin as expected');
  assert.deepStrictEqual(
    bucketizeAnagrams(["star", "rats", "car", "arc", "arts", "rats", "bar"]),
    [["star", "rats", "arts"], ["car", "arc"], ["bar"]],
    'bucketize isn\'t workin as expected'
  );
}

testAnagrams();
