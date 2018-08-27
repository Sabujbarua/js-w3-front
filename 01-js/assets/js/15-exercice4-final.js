// log = fun => console.log(fun);
// log("exercice 4");

// /* 
// CONSIGNE:

//     Considérons un Formulaire HTML avec les champs pseudo, age, email et mdp.
// Considérons un Tableau JS contenant une liste de membre.

//     -- -- -- -- -

//     ETAPE 1: Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.

// Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s 'afficher et le bouton "submit" être désactivé.

// A l 'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l 'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.

//     -- -- -- -- -

//     ETAPE 2: L 'inscription n'est possible qu 'aux personnes majeurs de 18 ans.
// Vous devez donc vérifier que l 'age saisi est bien supérieur ou égale à 18 ans.

// Si cette condition n 'est pas valide, alors la notification ageError doit s'
// afficher et le bouton "submit"
// être désactivé.

// Quand l 'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'
// affiche plus et le bouton submit est de nouveau disponible.

//     -- -- -- -- -

//     ETAPE 3:

//     Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue": Bonjour[Pseudo]: Pseudo étant la saisie en cours de l 'utilisateur.

//     -- -- -- -- -

//     ETAPE 4: Si toutes les conditions sont validées, l 'utilisateur va pouvoir procéder à son inscription.

// En cliquant sur le bouton "M'inscrire", vous devrez enclencher une action permettant:

//     A.L 'ajout de l'
// utilisateur dans le tableau.
// B.L 'affichage pour l'
// utilisateur sur la page d 'un message de bienvenue, ainsi que la liste des membres inscrit dans une liste non-ordonnée.

// Ex.Merci Hugo!Tu es maintenant inscrit.
// Voici la liste de nos Membres:

//     Hugo: 26 ans
// Rodrigue: 56 ans
//     ...

//     NB: Devra bien entendu s 'afficher le membre qui vient de s'
// inscrire.
//  */

var membres = [{
        'pseudo': 'Hugo',
        'age': 26,
        'email': 'wf3@hl-media.fr',
        'mdp': 'wf3'
    },
    {
        'pseudo': 'Rodrigue',
        'age': 56,
        'email': 'rodrigue@hl-media.fr',
        'mdp': 'roro'
    },
    {
        'pseudo': 'James',
        'age': 78,
        'email': 'james@hl-media.fr',
        'mdp': 'james8862'
    },
    {
        'pseudo': 'Emilio',
        'age': 18,
        'email': 'milio@hl-media.fr',
        'mdp': 'milioDu62'
    }
];
// // test to see the table
// log(membres);

// /***** collect "ID" and "CLASS" from HTML *****/
// var Bienvenue = document.getElementById("Bienvenue");
// var InscriptionForm = document.getElementById("InscriptionForm");
// var pseudo = document.getElementById("pseudo");
// var age = document.getElementById("age");
// var email = document.getElementById("email");
// var mdp = document.getElementById("mdp");
// var submit = document.getElementById("submit");
// //class
// var pseudoError = document.getElementsByClassName('pseudoError')[0];
// var ageError = document.getElementsByClassName('ageError')[0];

// /*** ETAPE 1 & 3 */

// pseudo.addEventListener('input', function (){

//     // log(pseudo.value);
//     for(let i = 0; i < membres.length; i++){
//         // log(membres[i]);

//         if(pseudo.value === membres[i].pseudo){
//             pseudoError.style.display = "block";
//             submit.disabled = true;
//             Bienvenue.textContent = '';
//             break;
//         }else{
//             pseudoError.style.display = "none";
//             submit.disabled = false;
//             Bienvenue.textContent = 'Bienvenue ' + pseudo.value;
//         }
//     }
// });

// /**** ETAPE 2 */

// const majoriteLegale = 18;
// age.addEventListener("change", function(){
//     if (age.value >= majoriteLegale){
//         ageError.style.display = "none"
//         submit.disabled = false;
//     }else{
//         ageError.style.display = "block"
//         submit.disabled = true;
//     }
// });

// InscriptionForm.addEventListener("submit", function(e){
//     //stopper la redirection HTTP
//     e.preventDefault();
//     const membre = {
//         'pseudo': pseudo.value,
//         'age': age.value,
//         'email': email.value,
//         'mdp': mdp.value
//     };
//     membres.push(membre);
//     log(membres);

//     //Paragraphe de con
//     const p = document.createElement('p');
//     p.innerHTML = "Merci " + pseudo.value + "! <strong> tu es maintenant inscrit. </strong> <br> <br> <u> Voici la liste de nos membres : </u>";
//     document.body.appendChild(p);

//     //Générer la liste des membres
//     const ul = document.createElement('li');
//     for(let i = 0; membres.length; i++){
//         let li = document.createElement('li');
//         li.textContent = membres[i].pseudo + " : " + membres[i].age + "ans";
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
// });

/*---------------------------------------
                CORRECTION
----------------------------------------*/
// Récupération des différents éléments 
const pseudo = document.getElementById('pseudo');
const age = document.getElementById('age');
const email = document.getElementById('email');
const mdp = document.getElementById('mdp');
const submit = document.getElementById('submit');
const Bienvenue = document.getElementById('Bienvenue');
const InscriptionForm = document.getElementById('InscriptionForm');


const pseudoError = document.getElementsByClassName('pseudoError')[0];
const ageError = document.getElementsByClassName('ageError')[0];

// Etape 1 & 3 : Vérification du pseudo & Afficher une alerte de 'Bienvenue'

// Ecouter l'évènement avec une Fonction inconnue

pseudo.addEventListener('input', function () {

    // console.log( pseudo.value);
    for (let i = 0; i < membres.length; i++) {
        // console.log( membres[i]);

        if (pseudo.value === membres[i].pseudo) {
            pseudoError.style.display = 'block';
            submit.disabled = true;
            Bienvenue.textContent = '';

            break;

        } else {
            pseudoError.style.display = 'none';
            submit.disabled = false;
            Bienvenue.textContent = 'Bienvenue ' + pseudo.value;
        }

    }
});

// Etape 2: Demande et vérification de l'age de l'utilisateur

const majoriteLegale = 18;

// Ecouter l'évènement avec une Fonction inconnue
age.addEventListener('change', function () {
    console.log(age.value);

    if (age.value >= majoriteLegale) {

        ageError.style.display = 'none';
        submit.disabled = false;

    } else {

        ageError.style.display = 'block';
        submit.disabled = true;
    }
});

// Etape 4: Intégrer le login de l'utilisateur dans le tableau

InscriptionForm.addEventListener('submit', function (event) {

    // Par défaut Stopper la redirection HTML(sinon direction vers une page PHP)
    event.preventDefault();

    const membre = {
        'pseudo': pseudo.value,
        'age': pseudo.value,
        'email': email.value,
        'mdp': mdp.value
    };
    // Ajouter un login dans le tableau
    membres.push(membre);
    console.log(membres);

    // paragraphe 
    const p = document.createElement('p');
    p.innerHTML = 'Merci' + pseudo.value + ' ! <strong>Tu es maintenant inscrit.</strong><br><br><span>Voici la liste des membres :</span>';
    document.body.appendChild(p);

    // -- Générer la liste des membres
    const ul = document.createElement('ul');
    for (let i = 0; i < membres.length; i++) {
        let li = document.createElement('li');
        li.textContent = membres[i].pseudo + ' : ' + membres[i].age + ' ans';
        ul.appendChild(li);
    }

    document.body.appendChild(ul);

});









/* my code */
/* //test to see what i collect
pseudoError.style.display = "block";
log(pseudo);

// creating a for loop to see all object and value of table
for (let i = 0; i < membres.length; i++){
    log(membres[i]);
    if (pseudo == membres[i].pseudo){
        membres[i].pseudoError.style.display = "block";
    }
}
function pseudoErrorAlert(){
    pseudo.style.display = pseudoError
}
addEventListener("", pseudoErrorAlert); */
