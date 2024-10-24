import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escape',
})
export class EscapePipe implements PipeTransform {
  transform(value: string): string {
    console.log('pipe');
    return String(value)
      .replaceAll('&amp;quot;', '"')
      .replaceAll('&amp;amp;', '&');
  }
}
