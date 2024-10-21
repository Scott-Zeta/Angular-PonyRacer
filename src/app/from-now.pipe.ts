import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromNow',
  standalone: true
})
export class FromNowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
