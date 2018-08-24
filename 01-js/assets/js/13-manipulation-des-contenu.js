console.log('manipulation des contenu');

/*----------------------------------------------
~~~~~~~~~~~~manipulation des contenu~~~~~~~~~~~~
----------------------------------------------*/

var l = function(e){console.log(e)}
l = e => console.log(e);

// -- je souhaite récupérer mon lien google... comment procéder?

const google = document.getElementById('google');
l(google);
// collect the HREF
l(google.href);

//collect the class
l(google.className);

//collect the text in TAG
l(google.textContent);

// je souhaite modifier le texte de nom de lien
google.textContent = "Goo00ooo000ooo00Gle";


/*-----------------------------------------------------
~~~~~~~~~~~~AJOUTER UN ELEMENT DANS MA PAGE~~~~~~~~~~~~
-----------------------------------------------------*/

/**
 * nous allons procéder en duex étapes :
 * 
 * 1. la function document.creatElement() va permettre de générer
 * un nouvel élément dans le DPOM; que je pourrais modifier par la 
 * suite aves les méthodes que nous venons de voir...
 * 
 * ps: ce nouvel élément est placé en mémoire!
 * 
 * 2. l'ajoutre à la page.
 */

 // -- definition de l'element
 var span = document.createElement('span');

//  si je souhaite lui donner un ID
span.ID = "monSpan";

// si je southaite lu attribuer du contenu
span.textContent = " Mon Beau text en JS";

// je l'ajoutre à la page
google.appendChild(span)

// google.appendChild(span).style.color = "red";
// google.appendChild(span).style.textDecoration = "none";





/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */


var h1 = document.createElement("h1");
var a = document.createElement("a");
a.textContent = "Titre de mon Article";
a.href = 'google.com';
a.style.color = "red";
a.style.textDecoration = "none";
h1.appendChild(a);
document.body.appendChild(h1);



