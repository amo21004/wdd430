import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Person } from 'src/app/persons/person.model';
import { PersonService } from 'src/app/persons/person.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  @ViewChild('movie') movieForm?: NgForm;

  public status: number = 0;
  public message: string = '';
  public persons?: Person[];

  constructor(private movieService: MovieService, private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe(persons => {
      this.persons = persons;
    });
  }

  onSubmit(form: NgForm) {
    const movie = form.value;

    if(!movie.title || !movie.summary) {
      return;
    }

    this.movieService.addMovie(movie).subscribe((result) => {
      if(result.success) {
        this.status = 1;

        this.message = 'The movie was added successfully.';

        this.movieForm?.resetForm();
      }
      else {
        this.status = -1;

        this.message = 'An error occured while trying to add the movie. Please try again later.';
      }
    }, (error) => {
      this.status = -1;

      this.message = 'An error occured while trying to add the movie. Please try again later.';
    });
  }
}
