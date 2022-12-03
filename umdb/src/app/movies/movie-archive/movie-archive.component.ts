import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-archive',
  templateUrl: './movie-archive.component.html',
  styleUrls: ['./movie-archive.component.css']
})
export class MovieArchiveComponent implements OnInit, OnDestroy {
  public fa = FontAwesome;

  public movies: Movie[] = [];

  public subscription: Subscription | null = null;

  constructor(private movieService: MovieService, protected router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDelete(movie_id: string) {
    this.deleteMovie(movie_id);
  }

  getMovies() {
    this.subscription = this.movieService.getMovies().subscribe((movies: Movie[]) => {
      for(const movie of movies) {
        this.movies.push(movie);
      }
    });
  }

  deleteMovie(movie_id: string) {
    this.movieService.deleteMovie(movie_id).subscribe();

    this.movies.find((movie, index) => {
      if(movie && movie._id == movie_id) {
        this.movies.splice(index, 1);
      }
    });
  }
}
