import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencypipe'
})
export class CurrencypipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value;
  }

}
