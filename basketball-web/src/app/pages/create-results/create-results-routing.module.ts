import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateResultsComponent } from './create-results.component';

const routes: Routes = [{ path: '', component: CreateResultsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateResultsRoutingModule { }
