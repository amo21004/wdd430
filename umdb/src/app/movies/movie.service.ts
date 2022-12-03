import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {
  }

  getMovies() {
    return this.http.get<Movie[]>('http://localhost:3000/movies/');
  }

  addMovie(movie: Movie) {
    return this.http.post<any>('http://localhost:3000/movies/', movie);
  }

  deleteMovie(movie_id: string) {
    return this.http.delete('http://localhost:3000/movies/' + movie_id);
  }
}
