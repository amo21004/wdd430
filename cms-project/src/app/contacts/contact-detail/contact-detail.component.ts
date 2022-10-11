import { Component, OnInit, Input } from '@angular/core';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;

  constructor() {}

  ngOnInit(): void {}
}
