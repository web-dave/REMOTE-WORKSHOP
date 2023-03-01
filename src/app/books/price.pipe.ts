import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(wert: string): string {
    console.log('pipe ==>', wert);
    return '$ ' + wert;
  }
}
