import { Routes } from '@angular/router';
import { HarryPotterMoviesListComponent } from './components/harry-potter-movies-list/harry-potter-movies-list.component';
import { HarryPotterMovieDetailsComponent } from './components/harry-potter-movie-details/harry-potter-movie-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: HarryPotterMoviesListComponent, pathMatch: 'full' },
  {
    path: 'movies/:movieId',
    component: HarryPotterMovieDetailsComponent,
    pathMatch: 'full',
  },
];
