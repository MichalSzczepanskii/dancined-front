import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'inputError',
  pure: false,
})
export class InputErrorPipe implements PipeTransform {
  transform(value: FormControl): string {
    if (value.hasError('required')) return 'Pole jest wymagane';
    if (value.hasError('email')) return 'Niepoprawny email';
    return '';
  }
}
