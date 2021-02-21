(function exercise1 () {
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

    var oneToTen = [1,2,3,4,5,6,7,8,9,10];

    for (var i = 0; i < oneToTen.length; i++) {
        document
            .getElementById('ex1-nums')
                .appendChild(document.createElement('span'))
    }

})()
