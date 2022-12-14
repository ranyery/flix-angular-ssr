import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_PATH } from 'src/environments/environment';

import { IMovie } from '../interfaces/IMovie';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private BASE_URL = `${API_PATH}/movies`;
  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${this.BASE_URL}/${id}`).pipe(
      map((movie) => {
        const { backdrop_path } = movie;
        return {
          ...movie,
          backdrop_path: `https://image.tmdb.org/t/p/original${backdrop_path}`,
        };
      })
    );
  }

  getAll(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(this.BASE_URL);
  }
}
