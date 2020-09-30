module.exports = function reverse(n) {
    let result = 0;

    if (n < 0) {
        n *= -1;
    }

    while (n > 0) {
        a = n % 10;
        result = result * 10 + a
        n = Math.floor(n / 10);
    }
    return result;
}
