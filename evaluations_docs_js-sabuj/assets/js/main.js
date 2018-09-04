$(function(){
    $('#contact').on('submit', function (event) {
        event.preventDefault();
        // alert('lol');

        const select = $('#select');
        const message = $('#message');


        if (select.val() === 'Selectionnez') {
            select.addClass('is-invalid');
           
        } else{
            select.addClass('is-valid');
           
        }
        if (message.val().length < 15) {
            
            message.addClass('is-invalid');
        } else{
            
            message.addClass('is-valid');
        }
        if ($(this).find('.is-invalid').length === 0) {

            $(this).replaceWith(`
            <div class="alert alert-success">
                Votre contact à bien été transmis !
                Nous vous répondrons dans les meilleurs délais.  
            </div>
            `);

        }


    });

}); // end of jQuery