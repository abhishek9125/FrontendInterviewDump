/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    const result = [];
    let pair = intervals[0];

    for(const i of intervals) {
        if(pair[1] >= i[0]) {
            pair[1] = Math.max(pair[1], i[1]);
        } else {
            result.push(pair);
            pair = i;
        }
    }

    result.push(pair);
    return result;
};