$(function(){
    console.log($('div'));
    $('div').hide('slow', function(){
        /**
         * La methode hide() de jquery
         *  - est une animation
         * - s'applique sur tous les éléménts ciblés avec mon sélécteur
         * ===
         * a la fin de hide() onajoute pour voir une alert()
        */

    //    $('div').css('background', 'green');
    //    $('div').css('color', 'red');
    //    $('div').show('slow');

        $('p').hide(1000).css('color', 'blue').css('font-size', '30px').delay(2000).show(500);


    }); //fin de hide()
    // alert("fin du hide() !");
    
}); // -- fin de $()



