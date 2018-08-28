$(function(){
l = e => console.log(e);

// je souhaite selectionner toutes les divs de ma page
l($('div'));

// -- je souhaite selectionner la balise de ma page
l($('#menu'));

// en partant de menu, je souhaite, tous les éléments descendants direct (enfant) qui sont dans NAV
l($('#menu').children());

//parmi ces descendants, uniquement l'élément UL
l($('#menu').children('ul'));

// en partant de UL, je souhaite récuérer tous le élément LI
l($('#menu').children('ul').find('li'));
l($('#menu').find('li'));

//je souhaite récuérer uniquement le 2em élément LI
l($('#menu').find('li').eq(1));

// je souhaite connaitre le voisin immediat de nom "Menu"
l($('#menu').next());

l($('#menu').next().next()); //voisin de la voisin

l($('#menu').prev()); //voisin avent

l($('#menu').parent()); //the parent


});