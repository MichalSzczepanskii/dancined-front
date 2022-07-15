import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluck',
})
export class PluckPipe implements PipeTransform {
  transform(input: any[], key: string): any {
    const output = input.map(value => value[key]);
    return output;
    // return output.filter(value => value !== undefined);
  }
}
