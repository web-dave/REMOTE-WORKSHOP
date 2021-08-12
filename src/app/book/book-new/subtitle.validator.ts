import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const SubtitleValidator = (name: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    console.log(control);
    if ((control.value as string).includes(name)) {
      return {};
    } else {
      return {
        Subtitle: true,
        msg: 'OH, value ist ohne ' + name,
      };
    }
  };
};
