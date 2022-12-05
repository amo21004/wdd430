import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieArchiveComponent } from './movies/movie-archive/movie-archive.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MovieViewComponent } from './movies/movie-view/movie-view.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MoviesComponent } from './movies/movies.component';

import { PersonArchiveComponent } from './persons/person-archive/person-archive.component';
import { PersonAddComponent } from './persons/person-add/person-add.component';
import { PersonEditComponent } from './persons/person-edit/person-edit.component';
import { PersonsComponent } from './persons/persons.component';

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
  },
  {
    path: 'persons',
    component: PersonsComponent,
    children: [
      {
        path: '',
        component: PersonArchiveComponent
      },
      {
        path: 'add',
        component: PersonAddComponent
      },
      {
        path: ':id/edit',
        component: PersonEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
