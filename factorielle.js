function factorielle(n) {
    let facto = 1;
    if (n <= 1) {
        return 1;
    }
    for (let i = n; i > 1 ; i--) {
        facto *= i;
    }
    return facto
}

console.log(factorielle(100));