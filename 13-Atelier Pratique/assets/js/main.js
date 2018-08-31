$(function(){
    
    $('#contact').submit(function(e){
        e.preventDefault();
        /**
         * -- 3- FONCTIONS
         * 1- valider une adresse mail */
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    
        /* 2- valider un n° de téléphone
         */
        function validateTel(tel) {
            var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
            return telReg.test(tel);
        }

        const nomPrenom = $('#nomPrenom').val();
        const email = $('#email').val();
        const tel = $('#tel').val();
        const subject = $('#subject').val();
        const message = $('message').val();
        
        if (nomPrenom === '' || !validateEmail(email) || !validateTel(tel) || subject === '' || message === '') {
            $(this).prepend(`
                    <div class="alert alert-danger">
                        Nous n'avons pas été en mesure de valider votre contact. Vérifiez vos informations. 
                    </div>
                `);
        } else {
            $(this).replaceWith(`
                    <div class="alert alert-success">
                        Votre contact à bien été transmis !
                        Nous vous répondrons dans les meilleurs délais.  
                    </div>
                `);
        }

    }); //END OF CONTACT

}); // END OF JQUERY