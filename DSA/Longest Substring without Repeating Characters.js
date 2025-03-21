class Solution {
    longestNonRepeatingSubstring(s) {
        
        const map = new Map();
        let left = 0, right = 0;
        let maxLength = 0;

        while(right < s.length) {
            const char = s[right];
            if(map.has(char)) {
                left = Math.max(left, map.get(char) + 1);
            }
            maxLength = Math.max(maxLength, right - left + 1);
            map.set(char, right);
            right++;
        }

        return maxLength;
    }
}