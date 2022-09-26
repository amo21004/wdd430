import { Component, Input, OnInit } from '@angular/core';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact = (new ContactListComponent).contacts[0];

  constructor() { }

  ngOnInit(): void {
  }

}
