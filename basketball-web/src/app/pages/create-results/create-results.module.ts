import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateResultsRoutingModule } from './create-results-routing.module';
import { CreateResultsComponent } from './create-results.component';


@NgModule({
  declarations: [
    CreateResultsComponent
  ],
  imports: [
    CommonModule,
    CreateResultsRoutingModule
  ]
})
export class CreateResultsModule { }
