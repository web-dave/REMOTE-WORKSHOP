import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
})
export class PagesPipe implements PipeTransform {
  transform(value: number, arg: string = 'S.'): string {
    console.log('Pipe', value);
    return `${arg}: ${value}`;
  }
}
