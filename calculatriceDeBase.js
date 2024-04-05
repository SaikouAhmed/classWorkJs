/*
function reverse(mot) {
    let reserve = '';
    for (let i = mot.length -1 ; i >=0 ; i--) {
        reserve += mot[i]
    }
    return reserve
}
*/


const palindrome = (mot) => {
    return mot.split('').reverse().join('') === mot
};

console.log(palindrome("elle")) // true
console.log(palindrome("bonjour")); // false
