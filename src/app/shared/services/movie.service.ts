import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';

import { IMovie } from '../interfaces/IMovie';
import { FetchOrCacheService } from './fetch-or-cache.service';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private _isServer: boolean;
  private _BASE_URL: string;

  constructor(
    private httpClient: HttpClient,
    private fetchOrCacheService: FetchOrCacheService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this._isServer = isPlatformServer(platformId);
    this._BASE_URL = this._isServer ? `${API_PATH}/movies` : '/api/movies';
  }

  getBySlug(slug: string): Observable<IMovie> {
    return this.fetchOrCacheService.set<IMovie>(
      slug,
      this.httpClient.get<IMovie>(`${this._BASE_URL}/${slug}`)
    );
  }

  getAll(): Observable<any> {
    return this.fetchOrCacheService.set<IMovie>(
      'getAll',
      this.httpClient.get<any>(this._BASE_URL)
    );
  }
}
