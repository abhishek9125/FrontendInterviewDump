class Solution {
    asteroidCollision(asteroids) {

        let n = asteroids.length;
        let st = [];
        
        for (let i = 0; i < n; i++) {
            if (asteroids[i] > 0) {
                st.push(asteroids[i]);
            } else {
                while (st.length > 0 && st[st.length - 1] > 0 && st[st.length - 1] < Math.abs(asteroids[i])) {
                    st.pop();
                }
                
                if (st.length > 0 && st[st.length - 1] == Math.abs(asteroids[i])) {      
                    st.pop();
                } else if (st.length == 0 || st[st.length - 1] < 0){
                    st.push(asteroids[i]);
                }
            }
        }
        return st;
    }
}