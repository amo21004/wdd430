import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) {
  }

  getPersons() {
    return this.http.get<Person[]>('http://localhost:3000/persons/');
  }

  addPerson(person: Person) {
    console.log(person);
    return this.http.post<any>('http://localhost:3000/persons/', person);
  }

  getPerson(person_id: string) {
    return this.http.get<Person>('http://localhost:3000/persons/' + person_id);
  }

  deletePerson(person_id: string) {
    return this.http.delete<any>('http://localhost:3000/persons/' + person_id);
  }

  updatePerson(person_id: string, person: Person) {
    return this.http.put<any>('http://localhost:3000/persons/' + person_id, person);
  }
}
