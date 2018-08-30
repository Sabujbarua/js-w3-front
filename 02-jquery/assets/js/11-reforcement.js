// modify console.log et document.write
log = e => console.log(e);
dw = d => document.write(d);



// diclare a table
const prenoms = ["Layla", "Jonathan", "Arnaud", "Jhordan", "Elies"];
log(prenoms);
dw(prenoms);
log(prenoms[0]);
for(let i =0; i < prenoms.length; i++){
    log(prenoms[i]);
    dw('<br>' + prenoms[i] + '<br>');
}

const login = [
    {nom: 'Barua',
    prenom: 'Sabuj',
    address: '3 rue victor hugo',
    tel: '0123456789'
    },
    {nom: 'Barua',
    prenom: 'son',
    address: '3 rue victor hugo',
    tel: '0123456789'
    },
    {nom: 'Barua',
    prenom: 'cristina',
    address: '3 rue victor hugo',
    tel: '0123456789'
    },
];
log(login);


dw('<ul>');
for(let i = 0; i < login.length; i++){
    dw('<li>');

    dw(login[i].nom + '<br>' + login[i].prenom + '<br>' + login[i].address + '<br>' + login[i].tel + '<br>');

    dw('</li>');

/*     dw('<li><ul>');
    dw(login[i].nom + '<br>' + '<li>' + login[i].prenom + '</li>' + '<br>' + '<li>' + login[i].address + '</li>' + '<br>' + '<li>' + login[i].tel + '</li>' + '<br>');
    dw('<ul></li>'); */
};
dw('</ul>');

var ul = document.createElement('ul');

for(let i =0; i < login.length; i++){

    li = document.createElement('li');

    li.innerHTML = login[i].nom + '<br>' + login[i].prenom + '<br>' + login[i].address + '<br>' + login[i].tel + '<br>';

    ul.appendChild(li);

}
document.body.appendChild(ul);

