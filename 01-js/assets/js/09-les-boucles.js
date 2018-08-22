console.log('Les Boucles');

/*-----------------------------------------------------
                LES BOUCLES
-----------------------------------------------------*/
for(let i = 0; i <= 10; i++){
    document.write("<p> instruction executée : <strong>" + i + "</strong></p>");
}
 document.write("<hr>");

 var j = 0;
 while(j <= 10){
     document.write("<p> instruction executée : <strong>" + j + "</strong></p>");
     j++;
 }

 /* -----------------------------
             EXERCICE
 ------------------------------ */
 document.write("<hr>");

 /**
  * CONSIGNE : Grâce à une boucle FOR  ou autre..., affichez la liste des prénoms
  * du tableau ci-dessus dans la console, ou sur votre page.
  */

 var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jacques'];

 /**
  * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
  * du tableau ci-dessus dans la console, ou sur votre page.
  */

  for (let i = 0; i < Prenoms.length; i++){
      document.write("<p> instruction executée : <strong>" + Prenoms[i] + "</strong></p>");
}

var j = 0;
while (j < Prenoms.length){
    console.log(Prenoms[j]);
    j++;    
}

    console.log('---');
    Prenoms.forEach(afficheUnPrenom);

    // -- ATTENTION A LA PERFORMANCE

    function afficheUnPrenom(prenom, i) {
        console.log(i + ' ' + prenom);
    }