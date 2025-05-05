var rotate = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < m; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    const reverse = (arr) => {
        let i = 0;
        let j = arr.length - 1;
        while(i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    for(let i = 0; i < n; i++) {
        reverse(matrix[i]);
    }
};