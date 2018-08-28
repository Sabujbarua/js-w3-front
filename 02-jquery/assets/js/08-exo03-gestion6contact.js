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
$(function(){

    //-- soumission de formulaire
    $('#contact').submit(function(event) {
        // -- stooping of redirection of the page
        event.preventDefault();

        // -- récupération du sélecteur HTML
        const myAlert = document.createElement('.invalid') = $((`<p>Somethings is wrong </p>`));

        const nom = $('#nom');
        const prenom = $('#prenom');
        const email = $('#email');
        const tel = $('#tel');

        if(nom.val().length === 0){
            nom.addClass('.invalid');
        }

    });

});