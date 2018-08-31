/*

OBJECTIF : A partir d'une liste de contacts, être en mesure de récupérer un contact et d'afficher le détail de ses informations.

CONSIGNE :

	// Un internaute doit pouvoir rechercher un contact sur la base de son Username, Email, Phone ou Name
	// Le résultat des membres correspondant s'affiche ensuite dans une liste en dessous du champ de recherche.

    ETAPE 1. Mettre en Place le HTML et le CSS nécessaire pour rechercher un contact.
        Ex. Un champ input-text, et/ou un bouton pour lancer la recherche.
        
    ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username.
    
    ETAPE 3. Afficher en HTML et CSS uniquement les informations de base : Nom, Prénom, Email, Téléphone.
    
    
*/


/* ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username. */

// -- Chargement du DOM ...
/* $(function () {

    $.ajax('https://jsonplaceholder.typicode.com/users').done(function(userName){
        console.log(userName);

            $('#search').on('input', function () {
                const keyword = $(this).val();
                $('.contenu-page').unmark().mark(keyword);
                //$('section').unmark().mark($(this).val());
                // $('.resultat').show(userName.username)        
            }); // end of markup
            
            for(let i = 0; i < userName.length; i++){
                console.log(userName[i].username);
                
                if ($('#search') === $(userName[i].username)){
                    console.log(userName[i].username);
                    
                }
            }
            
        }); //end of $.ajax

}); //end of jQery */



/* work cloboration */

$(function(){

    //-- 1. Ecoutez la saisie de l'utilisateur
    $('#search').on('change', function (event) {

        //-- 2. Recuperation de la valeur saisie
        var search = $(this).val();
        console.log(search);

        //-- 3 Récupererer la liste des contacts depuis l'API
        $(".resultat").slideUp();
        $('.resultat').empty();
        $.ajax('https://jsonplaceholder.typicode.com/users')
        .done(function(users){
            console.log(users);

            // -- 4. On parcours le tableau d'utilisateur
            for(let i = 0; i < users.length; i++){
                // console.log(users);
                
                // -- 5. Recupération de l'utilisateur
                var user = users[i];
                
                // -- 6. je filtre mon tableau.
                if (search === user.name.toLowerCase() || search === user.username.toLowerCase() || search === user.email || search === user.phone) {
                    $(`
                    <div class="membre">
                        <div class="membre_informations">
                            <p>Nom Complet : ${user.name}</p>
                            <p>Username : ${user.username}</p>
                            <p>Email : ${user.email}</p>
                            <p>Téléphone : ${user.phone}</p>
                        </div>
                    </div>
                    `).appendTo($('.resultat'));
                }
                
                
            } // fin de for loop           
            
            $('.resultat').unmark().mark(search);
            $(".resultat").slideDown();

        }); // fin de $.ajax        

    }); // fin de SEARCH

}); // fin de JQUERY