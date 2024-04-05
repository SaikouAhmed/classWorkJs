// Bonjour => 3

function vowelsCounter(chaine) {
    let counter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y', 'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'à', 'è', 'ì', 'ò', 'ù', 'À', 'È', 'Ì', 'Ò', 'Ù', 'â', 'ê', 'î', 'ô', 'û', 'Â', 'Ê', 'Î', 'Ô', 'Û', 'ä', 'ë', 'ï', 'ö', 'ü', 'Ä', 'Ë', 'Ï', 'Ö', 'Ü'];
    for (const chaineElement of chaine) {
        if (vowels.includes(chaineElement)) {
            counter++;
        }
    }
    return counter;
}

console.log(vowelsCounter("mOhaMedToUre"));