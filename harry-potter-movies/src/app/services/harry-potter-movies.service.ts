import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from '../interfaces/movie-details';
import { Movies } from '../interfaces/movies';

@Injectable()
export class HarryPotterMoviesService {
  constructor(private readonly http: HttpClient) {}

  getMoviesList(): Observable<Movies[]> {
    return this.http.get<Movies[]>('/movies');
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`/movies/${id}`);
  }
}
