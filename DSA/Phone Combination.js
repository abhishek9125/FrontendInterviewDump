class Solution {
    letterCombinations(digits) {

        const mapping = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz',
        }
        
        if (digits.length === 0) return [];
        
        const results = [];

        function backtrack(index, output) {
            if(index === digits.length) {
                results.push(output);
                return;
            }

            const keyMap = mapping[digits[index]];

            for(let i = 0; i < keyMap.length; i++) {
                backtrack(index + 1, output + keyMap[i]);
            }
        }

        backtrack(0, '')

        return results;
    }
}