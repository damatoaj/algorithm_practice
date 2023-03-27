function optimalStopping(array) {
    let c = 0;
    const p37  = Math.round(37 * array.length / 100);
    
    for (let i = 0, l = array.length; i <= l; i++) {
       if (array[i] > c && i < p37) {
        c = array[i]
       } else if (array[i] > c && i >= p37) {
        return array[i]
       }
       continue
    }
    return c
};

function reverseOptimalStopping(array) {
    let c = 0;
    const p = Math.round(63 * array.length / 100);

    for (let i = array.length; i--;) {
        if (array[i] > c && i > p) {
            c = array[i]
        } else if (array[i] > c && i <= p) {
            return array[i]
        }
        continue
    }
    return c
};

module.exports = { optimalStopping, reverseOptimalStopping }