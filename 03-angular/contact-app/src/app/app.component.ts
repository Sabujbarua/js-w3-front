/**
 * pour déclarer une class comme composant de
 * notre application, on inporte "component" via
 * @angular/core
 */
import { Component } from '@angular/core';
import {log} from 'util';
import {Contact} from './shared/models/contact';



/**
 * @Component est ce qu'on apple un décorateur.
 * il va nous permettre de définir 3 paramètres
 * essentils à notre application...
 */
@Component({
  /**
   * Le sélecteur (selector) détermine la
   * manière dont le composant sera affiché
   * dans notre HTML : <app-root></app-root>;
   * Vous devez OBLIGATOIREMENT AVOIR LA BALISE
   * D4OUVERTURE ET DE FERMETUR*/
  selector: 'app-root',

  /**
   * "templateUrl" ou "template" est la
   * partie visible de composant. c'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé
   */
  templateUrl: './app.component.html',

  // template:`
  //   <h1>{{title}}</h1>
  // `,

  /**
   * La classe contient les données du composant,
   * mais aussi, son comportement (ce qu'il fait).
   */
  styleUrls: ['./app.component.css']
//  styles:[`
//    h1{color: blue; text-align: center;}
//  `]

})
export class AppComponent {
  // -- Déclaration d'une Variable
  title = 'Gestion de Contacts';
  contactActif: Contact;

  unContact: Contact = {
    id: 1,
    name: 'Sabuj Barua',
    username: 'sabujraj',
    email: 'sabuj@gmail.com'
  };

  //table of contacts
  mesContacts: Contact[] = [
      {
        id: 111111,
        name: 'Sabuj Barua',
        username: 'sabujraj',
        email: 'sabuj@gmail.com'
      },

      {
        id: 222222,
        name: 'Luc JOINVIL',
        username: 'LUC',
        email: 'luc@gmail.com'
      },

      {
        id: 333333,
        name: 'Alpha DAILLO',
        username: 'alpho',
        email: 'luc@gmail.com'
      },

      {
        id: 444444,
        name: 'Layla LAHCENE',
        username: 'layla',
        email: 'layla@gmail.com'
      }
    ];



  showContact(contactCliqueParMonUtilisateur: Contact) {
    this.contactActif = contactCliqueParMonUtilisateur;
  }

  addContactToArray(nouveauContact: Contact) {

    this.mesContacts.push(nouveauContact);
  }


}
