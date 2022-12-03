import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieArchiveComponent } from './movies/movie-archive/movie-archive.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieViewComponent } from './movies/movie-view/movie-view.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: '',
        component: MovieArchiveComponent
      },
      {
        path: 'add',
        component: MovieAddComponent
      },
      {
        path: ':id',
        component: MovieViewComponent
      },
      {
        path: ':id/edit',
        component: MovieEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
