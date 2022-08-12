module.exports = function reverse (n) {
    let m = n.toString().split('');
    if (m[0] === '-') {
      return Number(m.slice(1).reverse().join(''));
    } else
    return Number(m.reverse().join(''));

}
