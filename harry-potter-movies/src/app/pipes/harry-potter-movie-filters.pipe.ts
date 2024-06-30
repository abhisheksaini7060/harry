import { Pipe, PipeTransform } from '@angular/core';
import { Movies } from '../interfaces/movies';

@Pipe({
  name: 'harryPotterMovieFilters',
  standalone: true,
})
export class HarryPotterMovieFiltersPipe implements PipeTransform {
  transform(
    movies: Movies[],
    movieTitleName: string,
    movieReleaseYear: string
  ): Movies[] {
    if (movieTitleName && !movieReleaseYear) {
      return movies.filter((movie: Movies) =>
        movie.title.toLowerCase().includes(movieTitleName.toLocaleLowerCase())
      );
    } else if (movieReleaseYear && !movieTitleName) {
      return movies.filter((movie: Movies) =>
        movie.release_date
          .split('-')[0]
          .toLowerCase()
          .includes(`${movieReleaseYear}`.toLocaleLowerCase())
      );
    } else if (movieTitleName && movieReleaseYear) {
      return movies
        .filter((movie: Movies) =>
          movie.title.toLowerCase().includes(movieTitleName.toLocaleLowerCase())
        )
        .filter((movie: Movies) =>
          movie.release_date
            .split('-')[0]
            .toLowerCase()
            .includes(`${movieReleaseYear}`.toLocaleLowerCase())
        );
    } else {
      return movies;
    }
  }
}
