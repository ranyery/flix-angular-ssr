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

  getBySlug(slug: string): Observable<IMovie> {
    return this.fetchOrCacheService.set<IMovie>(
      slug,
      this.httpClient.get<IMovie>(`${this.BASE_URL}/${slug}`)
    );
  }

  getAll(): Observable<any> {
    return this.fetchOrCacheService.set<IMovie>(
      'getAll',
      this.httpClient.get<any>(this.BASE_URL)
    );
  }
}
