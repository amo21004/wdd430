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

  getMovie(movie_id: string) {
    return this.http.get<Movie>('http://localhost:3000/movies/' + movie_id);
  }

  deleteMovie(movie_id: string) {
    return this.http.delete<any>('http://localhost:3000/movies/' + movie_id);
  }

  updateMovie(movie_id: string, movie: Movie) {
    return this.http.put<any>('http://localhost:3000/movies/' + movie_id, movie);
  }
}
