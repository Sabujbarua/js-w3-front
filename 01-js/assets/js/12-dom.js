console.log("DOM");

/*-------------------------
 **********LE DOM**********
-------------------------*/


/*------------------------------------------------------------------------
## Le DOM est une interface de développement en JS pour HTML.
Grâce au DOM, je vais être en mesure d'accéder / modifier mon code HTML.

## L'objet "document" : c'est le point d'entrée vers mon contenu HTML

## chaque page chargée dans mon navigateur à un objet "document".
------------------------------------------------------------------------*/

/**
 * comment puis-je fair pour récupérer les différentes information de ma page HTML
 */


 /*-------------------------------------------------------
 ~~~~~~~~~~~~~~~~documment.getElementById~~~~~~~~~~~~~~~~
 documment.getElementById() est une function qui va permrttre de récupérer un element html à partir de son identifiant unique : ID
-------------------------------------------------------*/
var bonjour = document.getElementById("bonjour");
console.log(bonjour);



 /*-------------------------------------------------------
  ~~~~~~~~~~~~~document.getElementsByClassName~~~~~~~~~~~~~
  documment.getElementByClaseName() est une
  function qui va permrttre de récupérer un element  (une class) html à partir de leur class
 -------------------------------------------------------*/

var contenu = document.getElementsByClassName("contenu");
console.log(contenu);



 /*-------------------------------------------------------
  ~~~~~~~~~~~~~~~~documment.getElementsByTagName~~~~~~~~~~~~~~~~
  documment.getElementByClaseName() est une
  function qui va permrttre de récupérer un element  (une class) html à partir de leur class
 -------------------------------------------------------*/
 const p = document.getElementsByTagName("p");
 console.log(p);
 