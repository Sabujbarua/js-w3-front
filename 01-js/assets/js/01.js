console.log("hello world");
// alert("hello....you are on my page");  -commentaire un ligne
/* alert("hello....you are on my page");  -commentaire plusieurs lignes*/

// --1: Déclarer une variable JS
var prenom;

//--2: Affecter une Valeur
prenom = "Sabuj";

//--3: afficher la valeur de ma variable dans la console
console.log(prenom);

/*------------------------------
| ~~~~les types de variable ~~~~|
-------------------------------*/

console.log(typeof prenom);

let age = 40;
console.log(typeof age);

/*------------------------------------------------------------------------------------
|                          ~~~~LA PORTEE DES VARIABLE~~~~                            |
|                                                                                    |
|les variable declarées directement à la racine JS sont appelés: variable GLOBALE.    |
|                                                                                    |
|elle sont disponiable dans l'ensemble de votre document, y compris dans les fonction|
|                                                                                    |
| ###                                                                                |
|la variable declarées à intérieur d'une fonction sont appées valiable LOCALES.      |
|elle sont disponibles UNIQUEMENT dans le scope de la function.                      |
------------------------------------------------------------------------------------*/

//--les variable de type FLOAT
var uneDecimale = -2.948;
console.log(uneDecimale);
console.log(typeof uneDecimale);

//--les booléens (VRAI / FAUX)
var unBoolean = false;
console.log(unBoolean);
console.log(typeof unBoolean);

//--les constantes
/* 
*la déclaration CONST permet de créer une constante accessible
*UNIQUEMENT en lecture. sa valeur ne pourra pas être modifiée par de réaffectations ultérieures; une constante ne peut pas être déclarée à nouveau...
*/

const host = 'localhost';
const user = 'root';
const password = 'mysql';

// we can't change valeur
//user = "hogo";
// typeof Error: assignment to constant variable.



var unNumber = "24";
console.log(unNumber);
console.log(typeof unNumber);
/*
*La fonction parseInt() pour retourner un entier
*à partir de mon string
*/
unNumber = parseInt(unNumber);
console.log(unNumber);
console.log(typeof unNumber);

//-- pour convertir un float
unNumber = "12.55"
unNumber = parseFloat(unNumber);
console.log(unNumber);
console.log(typeof unNumber);

// pour convertir un nombre en string ou float en string
unNumber = 10;
var monString = unNumber.toString();
console.log(unNumber);
console.log(typeof monString);





