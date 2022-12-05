import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  @ViewChild('person') personForm?: NgForm;

  public status: number = 0;
  public message: string = '';
  public personToEdit?: Person;

  constructor(private personService: PersonService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const person_id = params['id'];

      const person = this.personService.getPerson(person_id).subscribe(person => {
        this.personToEdit = person;
      });
    });
  }

  onSubmit(form: NgForm) {
    const person = form.value;

    if(!person._id || !person.first_name || !person.last_name) {
      return;
    }

    this.personService.updatePerson(person._id, person).subscribe((result) => {
      if(result.success) {
        this.status = 1;

        this.message = `The person was updated successfully.`;
      }
      else {
        this.status = -1;

        this.message = 'An error occured while trying to update the person. Please try again later.';
      }
    }, (error) => {
      this.status = -1;

      this.message = 'An error occured while trying to update the person. Please try again later.';
    });
  }
}
