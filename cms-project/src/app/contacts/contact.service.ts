import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactListChangedEvent = new Subject<Contact[]>();

  contactSelectedEvent = new EventEmitter<Contact>();

  contactChangedEvent = new EventEmitter<Contact[]>();

  maxContactId: number;

  private contacts: Contact[] = [];

  constructor(private http: HttpClient) {
    this.contacts = MOCKCONTACTS;
  }

  //getContacts(): Contact[] {
  getContacts(): any {
    //return this.contacts.slice();
    return this.http.get<Contact[]>('https://cms-project-e85f6-default-rtdb.firebaseio.com/contacts.json').subscribe((contacts: Contact[]) => {
      this.contacts = contacts;

      this.maxContactId = this.getMaxId();

      this.contacts.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        else if (a.name > b.name) {
          return 1;
        }

        return 0;
      });

      this.contactListChangedEvent.next(this.contacts);

      this.contactChangedEvent.emit(this.contacts.slice());

      return this.contacts;
    }, (error: any) => {
    }
    );
  }

  storeContacts(contacts: Contact[]) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put('https://cms-project-e85f6-default-rtdb.firebaseio.com/contacts.json', contacts, { headers: headers }).subscribe(response => {
      this.contactListChangedEvent.next(this.contacts);
    });
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
    if (newContact == undefined || newContact == null) {
      return
    }

    this.maxContactId++;

    newContact.id = String((this.maxContactId));

    this.contacts.push(newContact);

    const contactsListClone = this.contacts.slice();

    //this.contactListChangedEvent.next(contactsListClone);
    this.storeContacts(contactsListClone);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (originalContact == undefined || originalContact == null || newContact == undefined || newContact == null) {
      return;
    }

    const pos = this.contacts.indexOf(originalContact);

    if (pos < 0) {
      return;
    }

    newContact.id = originalContact.id;

    this.contacts[pos] = newContact;

    const contactsListClone = this.contacts.slice();

    //this.contactListChangedEvent.next(contactsListClone);
    this.storeContacts(contactsListClone);
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
