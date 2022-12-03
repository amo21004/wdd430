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
import { ActorsComponent } from './actors/actors.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ActorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
