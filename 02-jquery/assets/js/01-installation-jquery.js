/*---------------------------------------------------------
                    LA DISPONIBILITE DU DOM
    a partir de moment, ou mon DOM, c'est à dier, l'ensemble 
    de l'arborescence de ma page HTML est complètement chargé
    je peux commencer à utiliser JQUERY
    
    je vais mettre l'ensemble de mon code dans une function,
    qui sera appelée AUTOMATIQUEMENT !par jquery lorsque le 
    DOM sera entièrement défini.

    3 façons de faire :
---------------------------------------------------------*/

// 1ème méthod
jQuery(document).ready(function(){
    // -- ICI, le DOM est entièrement chargé; je peux procéder à mon code.
    //......
    //......
    //......
    //......
});
// 2ème méthod
$(document).ready(function () { });

// 3ème méthod
$(function(){
    //......
    //......
    //......
});

$(()=>{
  /*   alert("hello jQuery"); */

  //en JS
    document.getElementById("texteEnJQ").innerHTML = "Mon text en JS";

// en jQuery
    $("#texteEnJQ").html("Mon texte en jQuery");
});
