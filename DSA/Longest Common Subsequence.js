class Solution {

    lcs(str1, str2) {

        const n = str1.length;
        const m = str2.length;
        const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

        for(let i = 0; i <= n; i++) {
            dp[i][0] = 0;
        }

        for(let i = 0; i <= m; i++) {
            dp[0][i] = 0;
        }

        for(let ind1 = 1; ind1 <= n; ind1++) {
            for(let ind2 = 1; ind2 <= m; ind2++) {
                if(str1[ind1 - 1] === str2[ind2 - 1]) {
                    dp[ind1][ind2] = 1 + dp[ind1-1][ind2-1];
                } else {
                    dp[ind1][ind2] = Math.max(dp[ind1-1][ind2], dp[ind1][ind2-1]);
                }
            }
        }

        return dp[n][m];
    }
}

// for Longest Common Substring in else condition reset dp[i][j] = 0;
// for Longest Palindromic Subsequence reverse string and apply lcs on both
// for Minimum Insertions to make String Palindrome find Longest Palindromic Subsequence and return n - k;
// for Minimum Insertions / Deletions to convert A to B -> find LCS then subtract n - k + m - k