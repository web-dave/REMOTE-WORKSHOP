import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tmGone',
  pure: true,
})
export class TmGonePipe implements PipeTransform {
  constructor(_ref: ChangeDetectorRef) {
    setInterval(() => {
      _ref.markForCheck();
    }, 1000);
  }

  transform(value: number): string {
    return new Date(Date.now() - value).toISOString().slice(11, 19);
  }
}
