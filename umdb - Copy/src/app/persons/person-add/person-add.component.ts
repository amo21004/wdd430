import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent {
  @ViewChild('person') personForm?: NgForm;

  public status: number = 0;
  public message: string = '';

  constructor(private personService: PersonService) {}

  onSubmit(form: NgForm) {
    const person = form.value;

    if(!person.first_name || !person.last_name) {
      return;
    }

    this.personService.addPerson(person).subscribe((result) => {
      if(result.success) {
        this.status = 1;

        this.message = 'The person was added successfully.';

        this.personForm?.reset();
      }
      else {
        this.status = -1;

        this.message = 'An error occured while trying to add the person. Please try again later.';
      }
    }, (error) => {
      this.status = -1;

      this.message = 'An error occured while trying to add the person. Please try again later.';
    });
  }
}
