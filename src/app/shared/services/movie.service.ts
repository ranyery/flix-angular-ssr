import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';

import { IMovie } from '../interfaces/IMovie';
import { FetchOrCacheService } from './fetch-or-cache.service';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private BASE_URL = `${API_PATH}/movies`;
  constructor(
    private httpClient: HttpClient,
    private fetchOrCacheService: FetchOrCacheService
  ) {}

  public getFeatured(): Observable<IMovie> {
    const idRandomMovie = Math.floor(Math.random() * 250) + 1;
    return this.getById(idRandomMovie, 'featured');
  }

  getById(id: number, stateKey?: string): Observable<IMovie> {
    return this.fetchOrCacheService.set<IMovie>(
      stateKey || 'getById',
      this.httpClient.get<IMovie>(`${this.BASE_URL}/${id}`)
    );
  }

  getAll(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(this.BASE_URL);
  }
}
