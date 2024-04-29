import {Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { ResultService } from '../../services/result.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ResultFS } from '../../models/ResultFS';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements OnInit{

  constructor(private router: Router, private resultService: ResultService, private auth: AuthenticationService) { }

  email: string = "";
  results: Array<ResultFS> = [];

  ngOnInit(): void {
    this.resultService.getAllResults().subscribe(results => {
      this.results = results;
    });
  }

  addToFavourite(result: ResultFS){
    this.email = this.auth.getLoggedInUserEmail();
    this.resultService.addToFavourite(result,this.email)
      .then(l => {
    }).catch(e => {
      window.alert(e);
    });
  }

  deleteFromResults(result: ResultFS){
    this.resultService.deleteFromResults(result)
  }

}
