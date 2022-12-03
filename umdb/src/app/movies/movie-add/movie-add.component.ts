import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent {
  @ViewChild('movie') movieForm?: NgForm;

  public status: number = 0;
  public message: string = '';

  constructor(private movieService: MovieService) {}

  onSubmit(form: NgForm) {
    const movie = form.value;

    if(!movie.title || !movie.summary || !movie.release_date) {
      return;
    }

    this.movieService.addMovie(movie).subscribe((result) => {
      if(result.success) {
        this.status = 1;

        this.message = `The movie was added successfully. ID is <a href="/movies/${result.movie._id}/edit">${result.movie._id}</a>`;
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
