/* LES SELECTEUR JQUERY */

// -- format => $('selecteur');

//  -- en JS => documents.getElementByTagName("balise");  => en jQ => $ ('balise');
//  -- en JS => documents.getElementById("IdSelecteur");     => en jQ => $ ('.class');
//  -- en JS => documents.getElementByClassName("ClassSelecteur");   => en jQ => $ ('#Id');

// -- en JS => document.querySelector("balise");    => en jQ => $ ('balise');
// -- en JS => document.querySelector("#IdSelecteur");  => en jQ => $ ('.class');
// -- en JS => document.querySelector(".ClassSelecteur");   => en jQ => $ ('#Id');


$(function(){
function log(log){console.log(log );}
// log = e => console.log(e);

    // -- séléctionner les SPAN
    // --en JS
    log(document.getElementsByTagName('span'));
    //en jQ
    log($('span'));

    // -- séléctionner le menu par son ID
    //en JS
    log(document.getElementById('menu'));
    //en jQ
    log($('#menu'));

    // -- séléctionner par la class
    // en Js
    log(document.getElementsByClassName('MaClasse'));
    // en jQ
    log($('.MaClasse'));

    // séléctionner un élément de ma page par so attribut
    log($('[href="#"]'));
    log($('[action="home.php"]'))
});