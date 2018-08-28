        /* -------------------------------------------------
        |             ~~~   LA CONSIGNE     ~~~            |
        |                                                  |
        | A partir du Formulaire de Contact ci-dessus :    |
        |                                                  |
        |   1. Afficher à l'utilisateur un Récapitulatif   |
        |   de sa demande de contact.                      |
        |                                                  |
        ------------------------------------------------- */

        // -- 1. Attente que le DOM soit chargé !
$(function() {
    // $('#MonFormulaire').on('submit', function (event) {
    //     event.preventDefault();

    //     console.log($(this));
        
    //     $(this).replaceWith(
    //         '<strong> Fullname : </strong>' + $('#fullname').val() +'<br><br>'
    //         +'<strong> Email : </strong>' + $('#email').val() + '<br><br>'
    //         +'<strong> Tel : </strong>' + $('#tel').val() + '<br><br>'
    //         +'<strong> Subjet : </strong>' + $('#sujet').val() + '<br><br>'
    //         +'<strong> Message : </strong>' + $('#message').val() + '<br><br>'
    //         );

    // });


    /* correction */
    $('#MonFormulaire').submit(function (event) {
        // -- 2. Stopper la redirection HTTP
        event.preventDefault();
        console.log($(this));
        
        // -- 3. Récupération des information
        const fullname = $('#fullname').val();
        const email = $('#email').val();
        const tel = $('#tel').val();
        const sujet = $('#sujet').val();
        const message = $('#message').val();

        $(this).replaceWith(`
        <p>
        Bonjour <strong> ${fullname} </strong> <em> (${email}) </em> <br><br>
        vous nous contacté au sujet de : <strong>${sujet}</strong>
        nous reviendrons vers vous dans les plus brefs délais au ${tel} <br><br>
        <u>ci dessous votre message </u> ${message}<br><br>
        </p>
        `);
    });

});