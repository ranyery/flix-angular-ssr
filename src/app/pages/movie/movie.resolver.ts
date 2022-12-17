import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
// eslint-disable-next-line sort-imports
import { catchError, Observable, of } from 'rxjs';
import { IMovie } from 'src/app/shared/interfaces/IMovie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<IMovie | null> {
  constructor(private movieService: MovieService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<IMovie | null> {
    const slug = route.params['slug'];
    return this.movieService.getBySlug(slug).pipe(catchError(() => of(null)));
  }
}
