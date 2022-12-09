import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'runtime' })
export class RuntimePipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    let result = null;

    if (hours === 0) {
      result = `${minutes}min`;
    } else if (minutes === 0) {
      result = `${hours}h`;
    } else {
      result = `${hours}h ${minutes}min`;
    }

    return result;
  }
}
