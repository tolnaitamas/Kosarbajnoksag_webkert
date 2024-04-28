import { Pipe, PipeTransform } from '@angular/core';
import { Result } from "../models/Result";
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'resultData'
})
export class ResultDataPipe implements PipeTransform {

  transform(event: Result): string {
    let newDate = new Date(event.eventDate);
    const datePipe = new DatePipe('en-US');
    let date = datePipe.transform(newDate,'MMM d, y')?.toString();

    return event.eventLocation+ ", " + date;
  }

}
