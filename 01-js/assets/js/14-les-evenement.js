console.log("Les Evenement");

/* -------------------------------------------------------
                LES EVENEMENTS 🤯🤢😈🤕

    Les évènements vont me permettre de déclencher une
    fonction, c'est à dire, une série d'instructions ;
    suite à une action de mon utilisateur.

    OBJECTIF : Etre en mesure de capturer ces évènements
    afin d'exécuter une fonction.

    Les Evenements : MOUSE ( Souris )

        click       : au clic sur élément ;
        dblclick    : au double clic ;
        mouseenter  : la souris passe au dessus d'un élément ;
        mouseleave  : la souris sors de l'élément.
        mouseover   : au passage de la souris

    cf: https://developer.mozilla.org/fr/docs/Web/API/MouseEvent

    Les Evenements : KEYBOARD ( Clavier )

        keyup       : une touche du clavier a été relachée ;
        keydown     : une touche est enfoncée.

    cf: https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent

    Les Evenements : WINDOW ( Fenêtre )

        scroll      : défilement de la fenêtre ;
        resize      : redimentionnement de la fenêtre.

    Les Evenements FORM ( Formulaire )

        change      : pour les éléments <input>, <select> et <textarea> ;
        submit      : à l'envoi ( soumission ) du formulaire ;
        input       : pour capter la saisie d'un utilisateur sur un champ <input>.

    ################# LES ECOUTEURS D'EVENEMENTS #################

    Pour attacher un évènements à un élément, ou autrement dit,
    pour déclarer un écouteur d'évènement qui se chargera de
    déclencher une fonction, je vais utiliser la syntaxe suivante :

-------------------------------------------------------------- */

var p = document.getElementById('monParagraphe');

function changerLaCouleurEnRouge() {
    p.style.color = "red";
}

p.addEventListener('mouseover', changerLaCouleurEnRouge);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/



var input = document.createElement("input");
input.id = 'myinput';
input.type = "text";
input.setAttribute("placeholder", "write you text");
input.textContent = "hello js"
document.body.appendChild(input);

function myAlert(){
    alert(input.value);
}
input.addEventListener("change", myAlert);



/****** soliution of teacher ******/
// -- Création du champ input
// var input = document.createElement('input');
// input.type = "text";
// input.id = "monID";
// input.setAttribute("placeholder", "Saisissez un contenu...");

// // -- Ajout dans la page
// document.body.appendChild(input);

// /**
//  * On écoute l'évènement "change" sur le champ "input"
//  * et on execute la fonction "displayUserInput"
//  */
// function displayUserInput() {
//     alert(input.value);
// }

// input.addEventListener('change', displayUserInput);

