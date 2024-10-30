 export const quiz_js = {
    questions: [
        {
            text: "1. Quel mot-clé est utilisé pour déclarer une fonction en JavaScript ?",
            code: "let numbers = [1, 2, 3, 4, 5];",
            options: [
                "A) def",
                "B) function",
                "C) func",
                "D) declare"
            ],
            reponse: "A) function",
            explication: ""
        },
        {
            text: "2. Quelle boucle utiliserais-tu pour parcourir un tableau en connaissant son nombre d'éléments?",
            code: "let numbers = [1, 2, 3, 4, 5];",
            options: [
                "A) for",
                "B) while",
                "C) do...while",
                "D) forEach"
            ],
            reponse: "A) for",
            explication: "Bien que forEach soit également valable, la boucle for est couramment utilisée pour un parcours basé sur un compteur."
        },
        {
            text: "3. Quelle sera la sortie du code suivant ?",
            code: `let age = 18;
            if (age >= 18) {
            console.log("Accès autorisé");
            } else {
            console.log("Accès refusé");
            }`,
            options: [
                "A) Accès refusé",
                "B) Accès autorisé",
                "C) Erreur de syntaxe",
                "D) Rien ne s'affiche"
            ],
            reponse: "B) Accès autorisé",
            explication: "La condition age >= 18 est vraie, donc le message 'Accès autorisé' sera affiché."
        },
        {
            text: "4. Quelle déclaration est correcte pour définir une variable dont la valeur peut changer ?",
            options: [
                "A) const age = 25;",
                "B) let age = 25;",
                "C) var const age = 25;",
                "D) fixed age = 25;"
            ],
            reponse: "B) let age = 25;",
            explication: "La déclaration let permet de créer une variable dont la valeur peut être modifiée."
        }
    ]
};
