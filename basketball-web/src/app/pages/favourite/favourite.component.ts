import { Component, OnInit } from '@angular/core';

import { FavouriteService } from '../../services/favourite.service';
import { AuthenticationService } from '../../services/authentication.service';
import { FavouriteFS } from '../../models/FavouriteFS';
import { ResultFS } from '../../models/ResultFS';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})
export class FavouriteComponent implements OnInit{

  constructor(private favouriteService: FavouriteService, private resultService: ResultService, private auth: AuthenticationService) {
  }

  email: string = this.auth.getLoggedInUserEmail();
  favourite: Array<FavouriteFS> = [];
  results: Array<ResultFS> = [];

  ngOnInit(): void {
    if(this.auth.isUserLoggedIn()){
      this.favouriteService.getFavouriteResults(this.email).subscribe(items => {
        this.favourite = items;
      });
    }
  }

  deleteFromFavourites(favourite: FavouriteFS){
    this.resultService.getResultById(favourite.itemId).subscribe(e => {
      this.results = e;
    });

    this.favouriteService.deleteFromFavourites(favourite).then(l => {
      window.alert('Eredmény törölve a kedvencek közül!');
    });
  }
}
