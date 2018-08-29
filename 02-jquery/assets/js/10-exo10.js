/* CONSIGNE : Avec l'aide de jQuery, vous devrez :

 1. Définir une structure HTML5 & CSS3 pour afficher des articles.

 2. Afficher une liste d 'articles à partir de l'
 API: https: //jsonplaceholder.typicode.com/posts

     3. BONUS: Afficher uniquement les 10 premiers articles.

 4. BONUS: Mettre en Place Markjs.io afin de surligner des mots dans les différents articles à l 'aide d'
 un champ input.
*/

$(function(){

    /* ******************************************************** */
    $('#markJS').on("keyup", function () {
        var keyword = $(this).val(),
            options = {
                "element": "span",
                "className": "markBlue",
                "separateWordSearch": true
            },
            $ctx = $(".context table tr td:nth-child(1)");
        $ctx.unmark({
            done: function () {
                $ctx.mark(keyword, options);
            }
        });
    });
    /* ********************************************************* */

     $.getJSON('https://jsonplaceholder.typicode.com/posts').done(function (data) {
                
                 console.log(data);
                 console.log(data[0].id);
                 console.log(data[0].userId);
                 console.log(data[0].title);
                 console.log(data[0].body);

                 for(let i = 0; i < data.length; i++){

                 $(`<p> 
                        ID : ${data[i].id} <br><br>
                        User Id : ${data[i].userId} <br><br>
                        Title: ${data[i].title} <br><br>
                        Body: ${data[i].body}
                                     
                   </p> <br>`).appendTo('article');

                //    if ($('#markJS').val() === data.find('id')) {
                //        alert('got it');
                //        break;
                //    }

                 }
    });
}); /* end of jQuery */