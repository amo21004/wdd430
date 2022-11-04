import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;


  id: string;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.contact = this.contactService.getContact(this.id);
      }
    );
  }

  onDelete(): void {
    this.contactService.deleteContact(this.contact);
    this.router.navigate(['/contacts']);
  }
}
