class Solution {
    trap(height) {

        let n = height.length;
        let i = 0;
        let j = n - 1;
        let leftMax = 0, rightMax = 0, total = 0;

        while(i < j) {
            if(height[i] <= height[j]) {
                if(leftMax > height[i]) {
                    total += leftMax - height[i];
                } else {
                    leftMax = height[i];
                }
                i++;
            } else {
                if(rightMax > height[j]) {
                    total += rightMax - height[j];
                } else {
                    rightMax = height[j];
                }
                j--
            }
        }

        return total;
    }
}
