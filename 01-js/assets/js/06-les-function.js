console.log('Les Function');
/*---------------------------------------------------
|                    Les Function                   |
---------------------------------------------------*/


/* 
- déclarer une function
- nb: cette function ne retourne aucune valeur
- et ne prend pas de paramètres.
*/
function hello() {
    var a = "bonjour";
    alert(a);
}
hello();
/*
- je vais executer ma function "bonjour" et déclencher ses instructions.
*/


/* function nomDeMaFunction(argument1, argument2) {
 les instructions
} */ 

function person(name, surname) {
    document.write("Hello <b>" + name + " " + surname + "</b>" + "<br>");
    console.log((name +" "+ surname));
    
}
person("Sabuj", "Barua");


/*---------------------------------------------------------------------------------
| EXERCICE:                                                                       |
|- créez une function permettan d'effectuer l'addition de deux nombre (nb1 et nb2)|
---------------------------------------------------------------------------------*/

function addition(nb1, nb2){

    // return(nb1 + nb2);
    return nb1 + nb2;
}
// addition(10, 5);
console.log(addition(10, 5));
document.write("the result of nb1 and nb2 is " + addition(10, 5));


 

