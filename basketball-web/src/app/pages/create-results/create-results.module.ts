import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateResultsRoutingModule } from './create-results-routing.module';
import { CreateResultsComponent } from './create-results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CreateResultsComponent
  ],
  imports: [
    CommonModule,
    CreateResultsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CreateResultsModule { }
