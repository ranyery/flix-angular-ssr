import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { IMovie } from '../../shared/interfaces/IMovie';
import { MovieService } from '../../shared/services/movie.service';

@Injectable({ providedIn: 'root' })
export class HomeResolver implements Resolve<IMovie> {
  constructor(private movieService: MovieService) {}

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<IMovie> {
    return this.movieService.getAll();
  }
}
