$(function(){
    /* 
    CONSIGNE: Avec l 'aide de jQuery, vous devrez :

    1. A l 'aide d'
    une API de Géolocalisation, vous affichez dans la page l 'adresse IP ainsi que la Ville et/ou Code Postal de l'
    internaute.

    Utilisation de JSONP: geoip.nekudo.com ||
    */

     // 1. Une requète AJAX SIMPLE
     $.ajax('http://geoip.nekudo.com/api/')
         .done(function (data) {
             console.log(data);
             console.log(data.ip);
         });

     // 2. avec getJSON
     $.getJSON('https://ipapi.co/json', data => {
         console.log(data)

         $(
             `
                    <p>
                        Votre IP est surveillée : ${data.ip}<br>
                        ${data.org} - ${data.region}
                    </p>
                `
         ).css({
             background: 'yellow',
             color: 'red'
         }).appendTo('body');

     });


});