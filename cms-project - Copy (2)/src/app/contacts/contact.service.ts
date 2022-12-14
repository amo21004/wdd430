import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactListChangedEvent = new Subject<Contact[]>();

  contactSelectedEvent = new EventEmitter<Contact>();

  contactChangedEvent = new EventEmitter<Contact[]>();

  maxContactId: number;

  private contacts: Contact[] = [];

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    for (const contact of this.contacts) {
      if (contact.id == id) {
        return contact;
      }
    }

    return null;
  }

  deleteContact(contact: Contact) {
    if (!contact) {
       return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
       return;
    }
    this.contacts.splice(pos, 1);

    const contactsListClone = this.contacts.slice();

    this.contactListChangedEvent.next(contactsListClone);

    this.contactChangedEvent.emit(this.contacts.slice());
 }

 addContact(newContact: Contact) {
  if(newContact == undefined || newContact == null) {
      return
  }

  this.maxContactId++;

  newContact.id = String((this.maxContactId));

  this.contacts.push(newContact);

  const contactsListClone = this.contacts.slice();

  this.contactListChangedEvent.next(contactsListClone);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if(originalContact == undefined || originalContact == null || newContact == undefined || newContact == null) {
        return;
    }

    const pos = this.contacts.indexOf(originalContact);

    if(pos < 0) {
        return;
      }

    newContact.id = originalContact.id;

    this.contacts[pos] = newContact;

    const contactsListClone = this.contacts.slice();

    this.contactListChangedEvent.next(contactsListClone);
  }

  getMaxId(): number {
    const maxId = 0;

    for (const contact of this.contacts) {
        const currentId = +contact.id;

        if (currentId > maxId) {
            const maxId = currentId
        }
    }

    return maxId
  }
}
