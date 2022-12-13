import { Injectable } from '@angular/core';
// eslint-disable-next-line sort-imports
import { makeStateKey, TransferState } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class TransferStateService {
  constructor(private transferState: TransferState) {}

  saveState<T>(key: string, data: any): void {
    this.transferState.set<T>(makeStateKey(key), data);
  }

  getState<T>(key: string, defaultValue: any = []): T {
    const state = this.transferState.get<T>(makeStateKey(key), defaultValue);
    this.transferState.remove(makeStateKey(key));
    return state;
  }

  hasState<T>(key: string) {
    return this.transferState.hasKey<T>(makeStateKey(key));
  }
}
