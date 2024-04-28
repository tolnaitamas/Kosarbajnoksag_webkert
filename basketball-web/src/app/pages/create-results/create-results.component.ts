import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Result } from '../../models/Result';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-create-results',
  templateUrl: './create-results.component.html',
  styleUrl: './create-results.component.scss'
})
export class CreateResultsComponent {

  newResultForm = new FormGroup({
    newHome: new FormControl(''),
    newAway: new FormControl(''),
    newHomePts: new FormControl(''),
    newAwayPts: new FormControl(''),
    newDate: new FormControl('')

  });

  constructor(private router: Router, private authService: AuthenticationService, private resultService: ResultService) { }
  ngOnInit(): void {
  }

  createResult(){
    if(this.newResultForm.get('newDate')?.value && this.newResultForm.get('newHome')?.value
        && this.newResultForm.get('newAway')?.value && this.newResultForm.get('newHomePts')?.value && this.newResultForm.get('newAwayPts')?.value){

      // @ts-ignore
      const result: Result = {
        home: this.newResultForm.get('newHome')?.value as string,
        away: this.newResultForm.get('newAway')?.value as string,
        homePts: this.newResultForm.get('newHomePts')?.value as unknown as number,
        awayPts: this.newResultForm.get('newAwayPts')?.value as unknown as number,
        date: this.newResultForm.get('newDate')?.value as string,
        homeImg: '../../assets/'+this.newResultForm.get('newHome')?.value as string,
        awayImg: '../../assets/'+this.newResultForm.get('newAway')?.value  as string
      }

      this.resultService.create(result).then(_ => {
        this.router.navigateByUrl('/results');
      }).catch(error => {
        window.alert("Hiba történt! " + error);
      });

    }else{
      window.alert("Tölts ki minden mezőt!");
    }

  }

}
