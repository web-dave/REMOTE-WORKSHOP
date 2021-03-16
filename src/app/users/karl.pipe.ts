import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
})
export class KarlPipe implements PipeTransform {
  transform(n: number): string {
    console.log('karl |');
    return 'I ist: ' + n;
  }
}
