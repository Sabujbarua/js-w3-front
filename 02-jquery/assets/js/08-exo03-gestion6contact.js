/********************************************************************************* 
    CONSIGNE:
        1. Créer un Formulaire HTML permettant le
        remplissage d 'une Fiche de Contact : Nom, Prénom,
        Email et le Téléphone.

        2. Après vérification des informations, vous
        ajouterez le nouveau contact dans un tableau javascript(array) de
        contacts.

        3. Vous afficherez ensuite l 'ensemble des contacts
        du tableau sur votre page HTML à la suite de votre
        formulaire.(Vous utiliserez une < table > )

        4. BONUS: Utilisation de Notification, Local Storage et Bootstrap.
*********************************************************************************/

/**********************************************************************************/
 // -- 1- Initialiser jQuery (DOM READY)
 $(function () {
     // -- 2- Déclaration d'un tableau pour stocker les contacts
    var collectionDeContacts = [];
     /**
      * -- 3- FONCTIONS
      * 1- valider une adresse mail */
          function validateEmail(email) {
              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
          }

      /* 2- valider un n° de téléphone
      */
     var validateTel = tel => {
         var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
         return telReg.test(tel);
     }

     /**
      * -- 4- TRAITEMENT DU FORMULAIRE
      */
     // -- 5- Détecter l'envoi du formulaire (tout le travail de vérification
     // des champs du formulaire se fait dans une fonction .on('submit'))
      $('#contact').on('submit', function (e) {
         // -- 6- stopper la redirection de la page
         e.preventDefault();

         // -- 7- récupérer les champs pour en vérifier les valeurs
         let nom, prenom, email, tel;
         nom     = $('#nom');
         prenom  = $('#prenom');
         email   = $('#email');
         tel     = $('#tel')
         // -- 8- création d'une variable de vérification (booléen)
         let mesInforlationSontValides = true;
         // -- 9- vérification des champs
         // -- 9.1- le prénom (longueur)
         if (prenom.val().length === 0){
            //dans nom IF le champs n'est pas renseigné
            mesInforlationSontValides = false;
            console.log(mesInforlationSontValides);
            
            //donc mon champ n'est pas valide
         }

         // -- 9.2- le nom (longueur)
         if (nom.val().length === 0) {
             //dans nom IF le champs n'est pas renseigné
             mesInforlationSontValides = false;
             //donc mon champ n'est pas valide
            }
            console.log(mesInforlationSontValides);

         // -- 9.3- le téléphone (fonction)
         if (!validateTel(tel.val())){
             // Si l'utilisateur a saisi des caractères non conformes
             // à ce qui est attendu (défini dans la function validateTel)
             //alors la function validateTel retournr 'false'
             mesInforlationSontValides = false;
            }
            console.log(mesInforlationSontValides);             

         // -- 9.4- le mail (fonction)
         if(!validateEmail(email.val())){
             mesInforlationSontValides = false;
            }
            console.log(mesInforlationSontValides);             

         // -- 10- si les champs sont tous valides
         if (mesInforlationSontValides){
             // -- 10.1- préparer le contact (objet)
             let contact = {
                 // indice  / clé   //valeur
                 nom     : nom.val(),
                 prenom  : prenom.val(),
                 email   : email.val(),
                 tel     : tel.val()
             }
            //  console.log(contact);
             
             // -- 10.2- vérification si le contact existe déjà (variable + for)
             let estPresent = false;
             // -- 10.2.1 - parcourir le tableau des contacts pour chercher si l'utilisateur existe déjà
            for (let i = 0; i < collectionDeContacts.length; i++){
                if (contact.email === collectionDeContacts[i].email){
                    estPresent = true;
                    break;
                }
            }
            // console.log(estPresent);
            
             // -- 10.3- si le contact est absent
             if (!estPresent){

                 // -- 10.3.1- ajouter au tableau des contacts
                 collectionDeContacts.push(contact);
                 console.log(collectionDeContacts);
                 
                 // -- 10.3.2- mettre à jour l'affichage
                 $('.aucuncontact').hide();
                 $(`<tr> <td> ${contact.nom}</td> <td> ${contact.prenom}</td> <td> ${contact.email}</td> <td> ${contact.tel}</td></tr>`).appendTo($('#LesContacts > tbody'));

                 // -- 10.3.3 - réinitialiser le formulaire
                 $('#contact')[0].reset();
                 $('#contact').get(0).reset();
                 $('#contact').trigger('reset');
                 $('#contact .form-control').val('');
                 document.getElementById('contact').reset();

                 // -- 10.3.4 - afficher un message
                 $('alert-contact').fadeIn().delay(5000).fadeOut();

             }else{
                 // -- 10.3.5 
                 alert('Attention!\ntu es déjà inscrit');
                 $('#contact').get(0).reset();
             }
            //  console.log(mesInforlationSontValides)
            }else{
             // alert l'utilisateur si un champs est mal rnseigné
             alert('Attention\nVeuillez renseigner tous les champs')
         }



      }); // -- Fin de on.('submit')
  }); // -- Fin de jQuery Ready
/**********************************************************************************/




/* my code */

// $(function () {
//     log = e => console.log(e);

//     /**
//         * Valider son email
//         */
//     function validateEmail(email) {
//         var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(email);
//     }

//     /**
//      * Valider son numéro de téléphone en FR
//      */
//     var validateTel = tel => {
//         var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
//         return telReg.test(tel);
//     }
//     var table = [];
//     /* -- soumission de formulaire */
//     $('#contact').submit(function subFormulaire(event) {
//         var myfalse = false;
//        /*  -- stooping of redirection of the page */
//         event.preventDefault();

//         // $('#contact .valid').removeFunction('insertAfter()');

//      /*  -- récupération du sélecteur HTML */
//         const nom     = $('#nom');
//         const prenom  = $('#prenom');
//         const email   = $('#email');
//         const tel     = $('#tel');


//         /* -- Validation du champ "nom" */
//         if (nom.val().length === 0) {
//             myfalse = false;
//             // $(this).insertAafter(`<p class="alert alert-danger">Nom souuldn't be empty</p>`);
//             $(`<p class="valid" style="color: red; margin: 0 0 -10px">Nom souuldn't be empty</p>`).insertAfter("#nom");
//         } else {
//             $(`<p style="color: green; margin: 0 0 -10px">Nom is valid</p>`).insertAfter("#nom");
//             myfalse = true;
//         }
//         /* -- Validation du champ "prenom" */
//         if (prenom.val().length === 0) {
//             myfalse = false;
//             $(`<p style="color: red; margin: 0 0 -10px">prenom souuldn't be empty</p>`).insertAfter("#prenom");
//         } else {
//             myfalse = true;
//             $(`<p style="color: green; margin: 0 0 -10px">prenom is valid</p>`).insertAfter("#prenom");
//         }
//         /* -- Validation du champ "email" */
//         if (!validateEmail(email.val())) {
//             myfalse = false;
//             $(`<p class="valid" style="color: red; margin: 0 0 -10px">Email souuldn't be empty</p>`).insertAfter("#email");
//         } else {
//             myfalse = true;
//             $(`<p style="color: green; margin: 0 0 -10px">Email is valid</p>`).insertAfter("#email");
//         }

//         /* -- Validation du champ "tel" */
//         if (!validateTel(tel.val())) {
//             myfalse = false;
//             $(`<p class="valid" style="color: red; margin: 0 0 -10px">Tel souuldn't be empty</p>`).insertAfter("#tel");
//         }else{
//             myfalse = true;
//         }

//         if (myfalse = true){
//             log($('#LesContacts').push(nom.val()) + push(prenom.val()) + push(email.val()) + push(tel.val()));
//         }

//     });


// });