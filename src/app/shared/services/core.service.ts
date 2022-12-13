/* eslint-disable no-undef */
import { Injectable } from '@angular/core';

declare const Zone: any;

@Injectable({ providedIn: 'root' })
export class CoreService {
  constructor() {}

  async waitFor<T>(prom: Promise<T>): Promise<T | undefined> {
    const macroTask = Zone.current.scheduleMacroTask(
      `WAITFOR-${Math.random()}`,
      () => {},
      {},
      () => {}
    );
    return prom.then((p: T) => {
      macroTask.invoke();
      return p;
    });
  }
}
