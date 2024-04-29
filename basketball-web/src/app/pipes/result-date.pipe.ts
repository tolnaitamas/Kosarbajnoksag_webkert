import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../models/Result';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'resultDate'
})
export class ResultDatePipe implements PipeTransform {

  transform(result: Result): string {
    let newDate = new Date(result.date);
    const datePipe = new DatePipe('en-US');
    let date = datePipe.transform(newDate,'EEEE, MMMM d, y')?.toString();

    // @ts-ignore
    return date;
  }

}
