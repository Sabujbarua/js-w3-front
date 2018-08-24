console.log('exercice 2');

/* --
    CONSIGNE : 
    
    A partir du tableau fourni, vous devez mettre en place un système d'authentification. 
    Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, 
    et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue 
    avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {
        'prenom': 'Hugo',
        'nom': 'LIEGEARD',
        'email': 'wf3@hl-media.fr',
        'mdp': 'wf3'
    },
    {
        'prenom': 'Rodrigue',
        'nom': 'NOUEL',
        'email': 'rodrigue@hl-media.fr',
        'mdp': 'wf3'
    },
    {
        'prenom': 'Nathanael',
        'nom': 'DORDONNE',
        'email': 'nathanael.d@hl-media.fr',
        'mdp': 'wf3'
    }
];

let PremierTrimestre = [{
        'prenom': 'hugo',
        'nom': 'LIEGEARD',
        allSubject: {
            'maths': '15',
            'english': '15',
            'france': '20',
            'geography': '10',
            'sociology': '10'
        }
    },
    {
        'prenom': 'layla',
        'nom': 'layla1',
        allSubject: {
            'maths': '10',
            'english': '20',
            'france': '10',
            'geography': '15',
            'sociology': '10'
        }
    },
    {
        'prenom': 'luc',
        'nom': 'luc1',
        allSubject: {
            'maths': '10',
            'english': '05',
            'france': '20',
            'geography': '15',
            'sociology': '20'
        }
    },
    {
        'prenom': 'jean',
        'nom': 'jean1',
        allSubject: {
            'maths': '05',
            'english': '10',
            'france': '10',
            'geography': '15',
            'sociology': '12'
        }
    },
    {
        'prenom': 'alpha',
        'nom': 'alpha1',
        allSubject: {
            'maths': '16',
            'english': '10',
            'france': '13',
            'geography': '15',
            'sociology': '11'
        }
    },
];


/* var userEmail = prompt("write you email here", "<Email>");
var userPassword = prompt("write you password here", "<password>");

for (let i = 0; i < BaseDeDonnees.length; i++){
    var selectedPersonEmail = BaseDeDonnees[i].email;
    var selectedPersonMdp = BaseDeDonnees[i].mdp;
    var selectedPersonPrenom = BaseDeDonnees[i].prenom;
    var selectedPersonNom = BaseDeDonnees[i].nom;

    foo = false;

    if (userEmail == selectedPersonEmail && userPassword == selectedPersonMdp) {
        document.write(selectedPersonPrenom + " " + selectedPersonNom + " souhaiterez vous bienvenue dans la notre site");
    } else {
        return foo;
    }
    // return{
    //     selectedPersonEmail : selectedPersonEmail,
    //     selectedPersonMdp : selectedPersonMdp,
    //     selectedPersonPrenom : selectedPersonPrenom,
    //     selectedPersonNom : selectedPersonNom
    // }

    // if (userEmail == selectedPersonEmail && userPassword == selectedPersonMdp) {        
    //     document.write(selectedPersonPrenom + " " + selectedPersonNom + " souhaiterez vous bienvenue dans la notre site");
    // }else{
    //     alert("there is an error");
    // }
    // var selectedPersonEmail = BaseDeDonnees[i].email;
    // console.log(selectedPersonEmail);
    
    // var selectedPersonMdp = BaseDeDonnees[i].mdp;
    // console.log(selectedPersonMdp);

    // if (userEmail == selectedPersonEmail && userPassword == selectedPersonMdp) {
        
    //     var selectedPersonPrenom = BaseDeDonnees.prenom;
    //     console.log(selectedPersonPrenom);
        
    //     var selectedPersonNom = BaseDeDonnees.nom;
    //     console.log(selectedPersonNom);
        
    //     document.write(selectedPersonPrenom + " " + selectedPersonNom + " souhaiterez vous bienvenue dans la notre site");
    // }else{
    //     alert("there is an error");
    // }
}
if (foo == true) {
    alert("error");
} else{
    
} */



 // -- 1. Demander à l'utilisateur ses identifiants.
 var emailUser = prompt("Email", "<Saisissez votre Email>");
 var mdpUser = prompt("Mot de passe ?", "<Saisissez votre Mot de Passe>");

 /**
  * Vérifie et Identifie un Utilisateur dans le tableau BaseDeDonnes.
  * Retourne l'utilisateur s'il à été trouvé.
  */
 function connexion(emailUser, mdpUser) {

     let isUserInArray = false;

     // -- 2. On parcours le tableau d'utilisateurs
     for (let i = 0; i < BaseDeDonnees.length; i++) {

         console.log(BaseDeDonnees[i]);
         // -- 3. Si on trouve une correspondace entre l'email / mdp saisie par l'utilisateur et la BDD.
         if (emailUser === BaseDeDonnees[i].email && mdpUser === BaseDeDonnees[i].mdp) {

             // -- 4. L'utilisateur existe dans mon tableau
             isUserInArray = true;
             return BaseDeDonnees[i];

         }

     }

     return isUserInArray;

     // -- AUTRE METHODE

     // return BaseDeDonnees.find(function(user) {
     //     return emailUser === user.email && mdpUser === user.mdp
     // });

     // return BaseDeDonnees.find( user => emailUser === user.email && mdpUser === user.mdp );

 }

 // function l(e) {
 //     console.log(e);
 // }
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
 l = e => console.log(e);

 var monUtilisateur = connexion(emailUser, mdpUser);
 l(monUtilisateur);

 // -- Si la condition retourne faux. ( Je n'ai pas trouvé de correspondance en BDD )
 if (monUtilisateur === undefined) {

     alert("ATTENTION, Identifiants incorrects");

 } else {

     // -- Tout va bien
     document.write("Bonjour " + monUtilisateur.prenom + " " + monUtilisateur.nom + " !");

 }