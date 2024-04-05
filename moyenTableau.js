const moy = function (tableau) {
    let sum = 0;
    tableau.map((elem) => sum += elem);
    return sum / tableau.length;
}

console.log(moy([1, 2, 3]));