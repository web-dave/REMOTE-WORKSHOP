import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selfie',
})
export class SelfiePipe implements PipeTransform {
  transform(value: string): string {
    console.log('transform ==>', value);
    return value.toUpperCase() + '🤳';
  }
}
