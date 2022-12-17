import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { IMovie } from '../../shared/interfaces/IMovie';
import { MovieService } from '../../shared/services/movie.service';

interface ISection {
  [k: string]: Partial<IMovie>[];
}

interface IGetAllResponse {
  featured: IMovie;
  sections: ISection[];
}

@Injectable({ providedIn: 'root' })
export class HomeResolver implements Resolve<IGetAllResponse> {
  constructor(private movieService: MovieService) {}

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<IGetAllResponse> {
    return this.movieService.getAll();
  }
}
