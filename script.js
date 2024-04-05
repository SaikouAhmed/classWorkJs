const arrayFilter = (operateur, tableau) => {
    const critere = 5;
    let newArray = [];
    for (let i = 0; i < tableau.length; i++) {
        switch (operateur) {
            case ">":
                tableau[i] > critere ? newArray.push(tableau[i]) : null;
                break;
            case "<":
                tableau[i] < critere ? newArray.push(tableau[i]) : null;
                break;
            case ">=":
                tableau[i] >= critere ? newArray.push(tableau[i]) : null;
                break;
            case "<=":
                tableau[i] <= critere ? newArray.push(tableau[i]) : null;
                break;
            case "==":
                tableau[i] === critere ? newArray.push(tableau[i]) : null;
                break;
        }
    }
    return newArray;
};

console.log(arrayFilter(">=", [2, 6, 7, 1]));