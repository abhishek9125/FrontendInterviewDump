
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let area = 0;

    while(i < j) {
        let minHeight = Math.min(height[i], height[j]);
        area = Math.max(area, (j - i) * minHeight);
        if(height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return area;
};