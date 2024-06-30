import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { HarryPotterMoviesService } from '../../services/harry-potter-movies.service';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Movies } from '../../interfaces/movies';
import { FormsModule } from '@angular/forms';
import { HarryPotterMovieFiltersPipe } from '../../pipes/harry-potter-movie-filters.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-harry-potter-movies',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    DurationPipe,
    HarryPotterMovieFiltersPipe,
  ],
  providers: [HarryPotterMoviesService],
  templateUrl: './harry-potter-movies-list.component.html',
  styleUrl: './harry-potter-movies-list.component.css',
})
export class HarryPotterMoviesListComponent implements OnInit, OnDestroy {
  moviesList: Movies[] = [];
  movieTitleName: string = '';
  movieReleaseYear: string = '';
  subscriptionsList$: Subscription = new Subscription();
  constructor(
    private readonly harryPotterMoviesService: HarryPotterMoviesService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getMoviesList();
  }

  getMoviesList(): void {
    this.subscriptionsList$.add(
      this.harryPotterMoviesService
        .getMoviesList()
        .pipe(
          tap((moviesList: Movies[]) => {
            this.moviesList = moviesList;
          })
        )
        .subscribe()
    );
  }

  goToMovieDetails(id: string): void {
    this.router.navigate(['/movies', id]);
  }

  inputNumberOnly(event: KeyboardEvent): boolean {
    const charCode = event.key;
    if (charCode < '0' || charCode > '9') {
      return false;
    }
    return true;
  }

  ngOnDestroy(): void {
    this.subscriptionsList$.unsubscribe();
  }
}
