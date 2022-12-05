import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/persons/person.model';
import { PersonService } from 'src/app/persons/person.service';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  @ViewChild('movie') movieForm?: NgForm;

  public status: number = 0;
  public message: string = '';
  public movieToEdit?: Movie;
  public persons?: Person[];

  constructor(private movieService: MovieService, private personService: PersonService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movie_id = params['id'];

      this.movieService.getMovie(movie_id).subscribe(movie => {
        this.movieToEdit = movie;
      });

      this.personService.getPersons().subscribe(persons => {
        this.persons = persons;
      });
    });
  }

  onSubmit(form: NgForm) {
    const movie = form.value;

    if(!movie._id || !movie.title || !movie.summary) {
      return;
    }

    this.movieService.updateMovie(movie._id, movie).subscribe((result) => {
      if(result.success) {
        this.status = 1;

        this.message = `The movie was updated successfully.`;
      }
      else {
        this.status = -1;

        this.message = 'An error occured while trying to update the movie. Please try again later.';
      }
    }, (error) => {
      this.status = -1;

      this.message = 'An error occured while trying to update the movie. Please try again later.';
    });
  }
}
