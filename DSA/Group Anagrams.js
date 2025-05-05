/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagrams = {};

    for(let word of strs) {
        let sortedWord = word.split('').sort().join('');
        if(!anagrams[sortedWord]) {
            anagrams[sortedWord] = [];
        }
        anagrams[sortedWord].push(word);
    }

    return (Object.values(anagrams))
};

var groupAnagrams = function(strs) {
    let ans = {};

    for (let s of strs) {
        let count = new Array(26).fill(0);

        // Count frequency of each letter in the string
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let key = count.join('#'); // Use a string as a key
        if (!ans[key]) {
            ans[key] = [];
        }
        ans[key].push(s);
    }

    return Object.values(ans);    
};