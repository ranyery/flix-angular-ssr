import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/shared/interfaces/IMovie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Injectable({
  providedIn: 'root',
})
export class MovieResolver implements Resolve<IMovie> {
  constructor(private movieService: MovieService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<IMovie> {
    const slug = route.params['slug'];
    return this.movieService.getBySlug(slug);
  }
}
