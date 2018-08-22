console.log('hello');

//-- déclarer un tableau index

var monTableau = [];
var myArray = new Array;

monTableau[0] = "Hogo";
monTableau[1] = "Jonathan";
monTableau[2] = "Elies";
monTableau[3] = "Layla";
console.log(monTableau);  //affiche toutes les données
console.log(monTableau[1]); //Jonathan
console.log(monTableau[3]); //Layla

// --table
var  nomPrenom = [
    "luc", 
    "Sabuj",
    "Jean",
    "Alpha",
    "kévin" ];
console.log(nomPrenom);


// --object
var coordonnee = {
    prenom : "Hogo",
    nom : "LIEGEARD",
    age : 28
}
console.log(coordonnee);
console.log(coordonnee["prenom"]);
console.log(coordonnee.nom);


var annuaireDesApprenants = [
    ["hogo", "lie", "0783 97 15 15"],
    ["luc", "abc", "xxxx xx xx xx"],
    {
        prenom : "luc",
        nom : "abc",
        tel : "xxxx xx xx xx"
    },
    {
        prenom: "Hogo",
        nom: "Lie",
        tel: "xxxx xx xx xx"
    }
];
console.log(annuaireDesApprenants);
console.log(annuaireDesApprenants[1][0]);
console.log(annuaireDesApprenants[1][1]);
//--ce n'est pas tres pratique !!!

console.log(annuaireDesApprenants[2].prenom);
console.log(annuaireDesApprenants[2].nom);

console.clear();


var Contacts = [{
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "wf3@hl-media.fr",
            tel: {
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port: "0783 97 15 15"
            },
            adresse: {
                rue: "35 Rue Jules Michelet",
                cp: "92700",
                ville: "Colombes",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }
        }
    },
    {
        prenom: "Rodrigue",
        nom: "NOUEL",
        coordonnees: {
            email: "rodrigue@hl-media.fr",
            tel: {
                fixe: "0596 145 569",
                fax: "0596 896 452",
                port: "0696 07 04 34"
            },
            adresse: {
                rue: "Quartier Sainte-Thérèse",
                cp: "97200",
                ville: "Fort-de-France",
                pays: {
                    code: "MQ",
                    nom: "Martinique"
                }
            }
        }
    },
    {
        prenom: "Elies",
        nom: "KEDIM",
        coordonnees: {
            email: "elies.k@hl-media.fr",
            tel: {
                fixe: "5456+46+4",
                fax: "564564564",
                port: "07 89 45 12 56"
            },
            adresse: {
                rue: "Au Paradis",
                cp: "77777",
                ville: "Eden Ville",
                pays: {
                    code: "PA",
                    nom: "3ème Ciel"
                }
            }
        }
    }
];

console.log(Contacts);
console.log(Contacts[0].prenom);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email);
console.log(Contacts[2].coordonnees.tel.fax);

console.clear();



/* mon exo de object */
var cuisine = [
    {
        nomDeRecette: "Clafoutis ",
        ingredients: [
                    "1 kg de cerises",
                    "30 cl de lait",
                    "10 cl de crème fleurette",
                    "120 g de farine",
                    "150 g de sucre",
                    "6 œufs",
                    "100 g de beurre fondu + 1 noix",
                    "4 cuillères à soupe de sucre cristallisé"
        ],
        Preparation: [
            "Facile",
            "20 mn",
            "100 mn"
        ]
    },
    
    {
        nomDeRecette: "Truffes",
        ingredients: [
                    "1 kg de cerises",
                    "30 cl de lait",
                    "10 cl de crème fleurette",
                    "120 g de farine",
                    "150 g de sucre",
                    "6 œufs",
                    "100 g de beurre fondu + 1 noix",
                    "4 cuillères à soupe de sucre cristallisé"
        ], 
        Preparation: [
            "Facile",
            "10 mn",
            "50 mn"
        ]
    }
];

console.log(cuisine);
console.log(cuisine[1].ingredients[6]);
console.log(cuisine[1].Preparation[1]);




/* -----------------------------
        ~ ~ CONSIGNE ~ ~

    Réaliser une structure JSON
    permettant de stocker des
    recettes de cuisine.
----------------------------- */

var receipes = [{
    name: 'Tiramisu',
    category: 'Desserts',
    subCategory: 'Gateaux',
    price: 'Abordable',
    difficulty: 'Facile',
    plate: 8,
    starRating: 4.98462123,
    photoUrl: 'https://www.monlien.fr/verslaphoto.jpg',
    videoUrl: 'https://www.monlien.fr/verslavideo.mp4',
    cooking: {
        preparation: '30min',
        time: '',
        temp: ''
    },
    ingredients: [{
            name: 'Sucre',
            quantity: 80,
            unit: 'g',
            imgUrl: 'https://www.monlien.fr/versingredient.jpg'
        },
        {
            name: 'Café Expresso',
            quantity: 15,
            unit: 'cl',
            imgUrl: 'https://www.monlien.fr/versingredient.jpg'
        },
        {
            name: 'Chocolat Cacao Amer',
            quantity: '1',
            unit: 'cuillère à soupe',
            imgUrl: 'https://www.monlien.fr/versingredient.jpg'
        },
        {
            name: 'Canelle',
            quantity: '1',
            unit: 'pincée',
            imgUrl: 'https://www.monlien.fr/versingredient.jpg'
        }
    ],
    instructions: [{
            name: 'Séparer les blancs des jaunes d\'oeufs.',
            imgUrl: 'https://www.monlien.fr/versletape.jpg'
        },
        {
            name: 'Mélanger les jaunes avec le sucre roux et le sucre vanillé.',
            imgUrl: 'https://www.monlien.fr/versletape.jpg'
        },
        {
            name: 'Ajouter le mascarpone au fouet.',
            imgUrl: 'https://www.monlien.fr/versletape.jpg'
        }
    ]
}];

/*---------------------------------
        AJOUTER UN ELEMENT
-----------------------------------*/

var Couleurs = ["rouge", "jaune", "vert"];
console.clear();
console.log(Couleurs);

// -- push me permet d'ajouter un élement a la fin de table
Couleurs.push("orange");
console.log(Couleurs);

// --unshift le rajoute au début
Couleurs.unshift("blue");
console.log(Couleurs);


/*---------------------------------------
RECUPERER ET SORTIR LE DERNIER ELEMENT
-----------------------------------------*/

//la function pop() me permet de delete un ou plusieurs élementsd de mon table et d'en récupérer la valeur.

var mondernierElement = Couleurs.pop();
var mondernierElement2 = Couleurs.shift();
console.log(Couleurs);
console.log(mondernierElement);
console.log(mondernierElement2);

/* 
la même chose est possible avec le premier élément en utilisant shift();

la function splice() vous permet de faire sortir un ou plusieurs element
*/


