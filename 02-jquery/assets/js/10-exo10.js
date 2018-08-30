/* CONSIGNE : Avec l'aide de jQuery, vous devrez :

 1. Définir une structure HTML5 & CSS3 pour afficher des articles.

 2. Afficher une liste d 'articles à partir de l'
 API: https: //jsonplaceholder.typicode.com/posts

     3. BONUS: Afficher uniquement les 10 premiers articles.

 4. BONUS: Mettre en Place Markjs.io afin de surligner des mots dans les différents articles à l 'aide d'
 un champ input.
*/

$(function(){


/*      $.getJSON('https://jsonplaceholder.typicode.com/posts').done(function (data) {
                
                 console.log(data);
                 console.log(data[0].id);
                 console.log(data[0].userId);
                 console.log(data[0].title);
                 console.log(data[0].body);

         for (let i = 0; i < data.length; i++){

                 $(`<p> 
                        ID : ${data[i].id} <br><br>
                        User Id : ${data[i].userId} <br><br>
                        Title: ${data[i].title} <br><br>
                        Body: ${data[i].body}
                                     
                   </p> <br>`).appendTo('article');

                 } // end of for

    }); //end of  $.getJSON

    $('#markJS').on('input', function () {
        let keyword = $(this).val();
        $('section').unmark().mark(keyword);
    }); */




    /* correction */
    $.ajax('https://jsonplaceholder.typicode.com/posts').done(function (articles) {
        console.log(articles);
        //--2. je parcours les articals et je les affiches sur la page
        $.each(articles, function (index, article){
            //-- vérification dans ma console
            console.log(index + ' ' + article.title);
            //-- affichage dans ma page
            $(`
                <section>
                    <header>
                        <h1>${article.title}</h1>
                    </header>
                    <article>
                        ${article.body}
                    </article>
                </section>
            `).appendTo($('main'));
            if(index === 9){
                return false;
            }
            

        });  // end of $each
        
    }); // end of $.ajax
    $('#markJS').on('input', function(){
        const keyword = $(this).val(); 
        $('section').unmark().mark(keyword);
        //$('section').unmark().mark($(this).val());

    });

}); /* end of jQuery */



