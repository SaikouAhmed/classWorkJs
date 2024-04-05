'use strict';
/*
7. Objet étudiant
Créez un objet représentant un étudiant avec les propriétés nom, âge, et notes (un
tableau de nombres). Ajoutez une méthode à l'objet qui calcule la moyenne des notes de
l'étudiant.
*/

const student = {
    name: "Aly",
    age: 20,
    notes: [10, 14, 16],
    moyenne: function() {
        let sum = 0;
        this.notes.map((x) => sum += x);
        return sum / this.notes.length;
    },
}

console.log(student.moyenne());






