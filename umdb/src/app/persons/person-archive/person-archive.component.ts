import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-person-archive',
  templateUrl: './person-archive.component.html',
  styleUrls: ['./person-archive.component.css']
})
export class PersonArchiveComponent implements OnInit, OnDestroy {
  public fa = FontAwesome;

  public persons: Person[] = [];

  public subscription: Subscription | null = null;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDelete(person_id: string) {
    this.deletePerson(person_id);
  }

  getPersons() {
    this.subscription = this.personService.getPersons().subscribe((persons: Person[]) => {
      for(const person of persons) {
        this.persons.push(person);
      }
    });
  }

  deletePerson(person_id: string) {
    this.personService.deletePerson(person_id).subscribe(()=>{
      this.persons.find((person, index) => {
        if(person && person._id == person_id) {
          this.persons.splice(index, 1);
        }
      });
    });
  }
}