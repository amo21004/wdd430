import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent {
  public movie!: Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movie_id = params['id'];

      this.movieService.getMovie(movie_id).subscribe(movie => {
        this.movie = movie;
      });
    });
  }
}
