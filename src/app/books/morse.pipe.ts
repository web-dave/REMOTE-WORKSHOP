import { Pipe, PipeTransform } from '@angular/core';
import { code } from './morse-code';

enum klaus {
  KLAUS = 'KLAUS',
  klaus = 'klaus',
}

@Pipe({
  name: 'morse',
  standalone: true,
})
export class MorsePipe implements PipeTransform {
  klaus: klaus | false = false;
  transform(value: string, foo?: boolean, bar?: boolean): string {
    console.log('Pipe', value);
    const c: string[] = value.split('');

    return (
      c
        // .map((zeichen) => zeichen.toLowerCase())
        .map((zeichen) => `${code[zeichen] ? code[zeichen] : zeichen} `)
        .join('')
    );
  }
}
