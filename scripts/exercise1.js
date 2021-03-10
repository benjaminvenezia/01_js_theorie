(function exercise1() {
    /**
     * Le code ci-dessous est une ébauche avec des défauts et des améliorations possibles.
     * 
     * 1. revoir ces quelques lignes en utilisant les notions ES6 vues en cours
     *  a. déclaration de variable
     *  b. boucle
     * 
     * 2. créer un deuxième tableau contenant les carrés (n^2) des éléments du tableau oneToTen
     *  a. fonction fléchée
     * 
     * 3. générer le tableau oneToTen dynamiquement, augmenter sa taille à 15
     *  a. générateur
     *  b. spread
     * 
     * 4. générer un <span/> par élément du tableau des carrés
     *  a. optimiser la génération (ne pas faire une query à chaque étape de la boucle)
     * 
     * 
     * 
     * Bonus
     * 
     * 1. il est possible de générer le tableau oneToTen avec un one-liner utilisant
     *    keys(), l'opérateur spread et map(), une idée?
     * 
     * 2. afficher la valeur de chaque élément dans les <span/> générés
     */

    const nums = document.getElementById('ex1-nums')
    const squares = document.getElementById('ex1-squares')
    const span = document.createElement('span')

    function* sequenceGenerator(minVal, maxVal) {
        let currVal = minVal;

        while (currVal <= maxVal)
            yield currVal++;
    }
    let oneToN = [...sequenceGenerator(1, 15)]
    console.log(oneToN)

    const oneToTen = [...Array(15).keys()].map(i => ++i)
    const oneToTenSquares = oneToTen.map(i => i * i)

    for (let i of oneToTen) {
        const num = span.cloneNode()
        num.textContent = i
        nums.appendChild(num)
    }

    for (let i of oneToTenSquares) {
        const num = span.cloneNode()
        num.textContent = i
        squares.appendChild(num)
    }

})()