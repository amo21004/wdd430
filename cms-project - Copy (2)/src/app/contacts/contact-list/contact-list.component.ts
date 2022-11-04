import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  subscription: Subscription;

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();

    // Set first contact as default on first load
    this.contactService.contactSelectedEvent.emit(this.contacts[0]);

    this.contactService.contactChangedEvent.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );

    this.subscription = this.contactService.contactListChangedEvent.subscribe((contactsList: Contact[]) => {
      this.contacts = contactsList;
    });
  }

  /*
  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }
  */
}
