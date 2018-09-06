import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  nouveauContact: Contact = new Contact();
  @Output() unContactEstCree = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Function appelé après
   * le submit de formulaire
   */
  exportContact() {
    /**
     * Lorsque mon formulaire est soumis,
     * j'émet un évènement qui sera écouté
     * par mon application, et qui récupèrera
     * lest données du nouveau contact
     **/
    //console.log(this.nouveauContact);
    this.unContactEstCree.emit(this.nouveauContact);

    // -- on réinitialise le contact
    this.nouveauContact = new Contact();
  }



}
