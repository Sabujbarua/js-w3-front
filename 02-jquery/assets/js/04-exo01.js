$(function () {
    log = e => (console.log(e));
    dw = dw => (console.log(dw));

    // var p = document.createElement('p');

    // $("#MonFormulaire").submit(function(e){

    //     event.preventDefault();
    //   $('p').$('#nomcomplet').val();
    // //   log($('#nomcomplet').show());
      
      
    // });





    // var p = document.createElement('p');

    $("#MonFormulaire").on('submit', function(event){

        event.preventDefault();
        log($(this));

      $("#MonFormulaire").hide();
      
      // 1st way
      $('<p>').append('Bonjour ' + $('#nomcomplet').val()).appendTo('body');

      //2nd way
      $('<p>Bonjour <strong>' + $('#nomcomplet').val() + '</p></strong>').appendTo('body');

      $(this).replaceWith('<p>Bonjour <strong>' + $('#nomcomplet').val() + '</strong></p>')
      
      
    });


});