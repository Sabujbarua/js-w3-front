/* --
EXERCICE:
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

/*----------------------------------------------*/
// -- 1. Initialisation des Variables
var objetDate = new Date();
var anneeActuall = objetDate.getFullYear();
// -- 2. Création d'une fonction
function identity(){

    // -- 3. Je demande à l'utilisateur son Prénom
    var prenom = prompt("Hello, what is your name?", "<Saisir votre Prénom>");
    console.log(prenom);
    console.log(typeof prenom);

    // -- 4. Je lui demande son age
    var age = parseInt(prompt("how old are you?", "<Saisir votre age>"));
    console.log(age);
    console.log(typeof age);

    // -- 5. Déduire l'année de naissance et l'afficher dans un alerte
    var yearOfBorn = anneeActuall - age;
    alert("wow! you born in " + yearOfBorn);
    // -- 6. Récapitulatif dans la page
    document.write("Hello " + "<strong>" + prenom + "</strong>" + " you are " + age);

    //its for the "document.write" out of function
/*     return {
        prenom: prenom,
        age: age
    } */
}
// -- 7. Executer la fonction
identity();

/* var contact = identity();
document.write("Hello " + "<strong>" + contact.prenom + "</strong>" + " you are " + contact.age); */
/*----------------------------------------------*/


/* function person(name, age, ann){
    //je donner le value à permettant
    name = prompt("Saisir son Prénom");
    age = parseInt(prompt("Bonjour " + name + ", Quel age as-tu ?"));
    // i took the "var" to creat a date automatic "getFullYear()"
    var date = new Date();

    ann = parseInt(alert("Tu est donc né en " + (date.getFullYear() - age)));

    var result = name +" "+ age;

    return result;

}
console.log(person()); */


