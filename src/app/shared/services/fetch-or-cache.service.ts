import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { TransferStateService } from './transfer-state.service';

@Injectable({ providedIn: 'root' })
export class FetchOrCacheService {
  private isServer: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private stateService: TransferStateService
  ) {
    this.isServer = isPlatformServer(platformId);
  }

  public set<T>(stateKey: string, observable: Observable<T>): Observable<T> {
    if (this.isServer) {
      return observable.pipe(
        tap((response) => {
          this.stateService.saveState<T>(stateKey, response);
        })
      );
    }

    const hasState = this.stateService.hasState<T>(stateKey);
    if (hasState) {
      return of(this.stateService.getState<T>(stateKey));
    }

    return observable;
  }
}
