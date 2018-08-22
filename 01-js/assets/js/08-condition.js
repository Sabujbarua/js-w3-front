console.log('Condition');

/*---------------------------------------------
        LES CONDITTONS
---------------------------------------------*/

// var mejoritelLegalFr = 18;
// if (14 >= mejoritelLegalFr){
//     alert('welcome');
// }else{
//     alert("go to google");
// };


/* ---------------------------------------------------------------------------------
|             EXERCICE                                                              |
|                                                                                   |
|    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).        |
|    S'il a la majorité légale, alors je lui souhaite la bienvenue,                 |
|    sinon, je fait une redirection sur Google après lui avoir signalé le soucis.   |
|                                                                                   |
---------------------------------------------------------------------------------- */

/* ########### 25 to 65 i put it in commenter for the next exercice ####### shouldn't be in commenter ########### */
//  Créer une fonction
// function visiteur(age){
//     //vérifier l'age d'un visiteur (prompt).
//     age = parseInt(prompt("Your age please :"));
//     //S'il a la majorité légale
//     if(age >= 18){
//         alert("welcome");
//     }else{
//         //sinon, je fait une redirection sur Google
//         document.location.href = "http://blog.prochoice.com.au/wp-content/uploads/2015/08/bigstock-Danger-skull-icon-84060749.jpg";
//     }

// }
// visiteur();


// /* solution d'enseignement */

// -- 1. Déclarer la majorité
const MAJORITELEGALEFR = 18;

// -- 2. Vérifier si l'utilisateur est majeur (fonction)
function monUtilisateurEstMajeur(age) {
    if (age >= MAJORITELEGALEFR) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande à l'utilisateur son age
var age = parseInt(prompt("Bonjour, Quel age avez-vous ?", "<Saisissez votre Age>"));

// -- 4. Vérification
if (monUtilisateurEstMajeur(age)) {
    alert("Bienvenue sur mon site internet réservé aux majeurs");
    document.write("0_0 !!!");
} else {

    // -- 5. Redirection
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";
}


/*-------------------------------------------------------------------------|
|                        LES OPERATEURS DE COMPARAIONS                     |
|                                                                          |
|   l'Opérateur de comparaison "==" signifie: Egal à.                      |
|    il permet de vérifier que 2 variable sont identiques.                 |
|                                                                          |
|   l 'Opérateur de comparaison "===" signifie: strictement égal à.        |
|   il va comparer la valeur, mais aussi le type                           |
|                                                                          |
|   l 'Opérateur "!=" : différent de                                       |
|   l 'Opérateur "!==" : strictement différent de                          |
|                                                                          |
-------------------------------------------------------------------------*/

/* -----------------------------------------------------------------------------------
|            EXERCICE :                                                              |
|   J'arrive sur un Espace Sécurisé au moyen                                         |
|   d'un email et d'un mot de passe.                                                 |
|                                                                                    |
|   Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.|
|                                                                                    |
|   En cas d'échec une alert m'informe du problème.                                  |
|   Si tous se passe bien, un message de bienvenue m'accueil.                        |
-------------------------------------------------------------------------------------*/

// // -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

/* simple way */
/* var mail = prompt("votre mail");
var passw = prompt("votre password");

if (email == mail && mdp == passw) {
    alert("un message de bienvenue m'accueil");
} else {
    alert("il y a une error");
} */

/* function way */
// var mail = prompt("votre mail");
// var passw = prompt("votre password");
// function user(){    
//     if (email == mail && mdp == passw) {
//         return true;
//     }else{
//         return false;
//     }
// }

// if (user()){
//     alert("un message de bienvenue m'accueil");
// }else{
//     alert("il y a une error");
// }


/* solution d'enseignement */

// -- 1. demander a l'user son mail
var emailUser = prompt("your email address", "<email>");
var mdpUser = prompt("your email address", "<password>");

//  -- 2. je vérifie si l'email saisie correspond avec celle dans BDD
if (email === emailUser && mdp === mdpUser) {
    alert("un message de bienvenue m'accueil");
} else {
    alert("il y a une error");
}
//  -- 3. tous est ok, je continue la vérification avec le mot de pass
//  -- 4. erreur au niveau de l'identfication


/* EXAMPLE with function */

function login(emailUser, mdpUser) {
    return email === emailUser && mdp === mdpUser;
}
if (login(emailUser, mdpUser)) {
    alert("un message de bienvenue m'accueil");
}else{
    alert("il y a une error");
}



/* -------------------------------------------------------------------- 
|                       les opaerateurs logiques


https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_logiques
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Op%C3%A9rateurs
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Op%C3%A9rateurs#Op%C3%A9rateur_conditionnel_ternaire                       |
-----------------------------------------------------------------------*/

/*************************************************************************** 
   # L'Opérateur ET : &&. si ls combinaison email et emailUser
   corrspond, ET la combinaison mdpUser et mdp correspond.

   => dans cette condition, les 2 doivent OBLIGATOIREMENT correspondent
   pour être validée.
   EX.if(emailUser === email && mdpUser === mdp;){............}

   # L 'Opérateur OU : ||. si ls combinaison email et emailUser
   corrspond, ET/OU la combinaison mdpUser et mdp correspond.

   => dans cette condition, au mois l'une des deux doit correspondent
   pour être validée.
   EX.if(emailUser === email || mdpUser === mdp;){...........}

   # L'Opérateur "!" : ou encore NOT
   il signifie le CONTARIRE DE / DIFFERENT DE.

   var monUtilisisateurEstApprove = true;
   if (!monUtilisisateurEstApprove){.........}
   si mon Utilisisateur n 'est pas Apprové.

   Reviens à écrire
   if (monUtilisisateurEstApprove === false){.............}


***************************************************************************/