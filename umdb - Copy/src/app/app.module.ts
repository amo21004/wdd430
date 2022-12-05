import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieViewComponent } from './movies/movie-view/movie-view.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MovieArchiveComponent } from './movies/movie-archive/movie-archive.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonsComponent } from './persons/persons.component';
import { PersonAddComponent } from './persons/person-add/person-add.component';
import { PersonEditComponent } from './persons/person-edit/person-edit.component';
import { PersonArchiveComponent } from './persons/person-archive/person-archive.component';
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MovieViewComponent,
    MovieEditComponent,
    MovieAddComponent,
    MovieArchiveComponent,
    PersonsComponent,
    PersonAddComponent,
    PersonEditComponent,
    PersonArchiveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
