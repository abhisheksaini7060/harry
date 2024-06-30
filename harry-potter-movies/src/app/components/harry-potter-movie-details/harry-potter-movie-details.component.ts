import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { MovieDetails } from '../../interfaces/movie-details';
import { HarryPotterMoviesService } from '../../services/harry-potter-movies.service';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-harry-potter-movie-details',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    CommonModule,
    RouterModule,
    HttpClientModule,
    DurationPipe,
  ],
  providers: [HarryPotterMoviesService],
  templateUrl: './harry-potter-movie-details.component.html',
  styleUrl: './harry-potter-movie-details.component.css',
})
export class HarryPotterMovieDetailsComponent implements OnInit, OnDestroy {
  subscriptions$: Subscription = new Subscription();
  movieDetails!: MovieDetails;
  constructor(
    private readonly harryPotterMoviesService: HarryPotterMoviesService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHarryPotterMovieDetails();
  }

  getHarryPotterMovieDetails(): void {
    const id = this.activatedRoute.snapshot.params['movieId'];
    this.subscriptions$.add(
      this.harryPotterMoviesService
        .getMovieDetails(id)
        .pipe(
          tap((movieDetails: MovieDetails) => {
            this.movieDetails = movieDetails;
          })
        )
        .subscribe()
    );
  }

  goBackToMoviesList(): void {
    this.router.navigate(['/movies']);
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
