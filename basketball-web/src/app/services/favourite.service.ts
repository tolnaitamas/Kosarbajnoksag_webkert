import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FavouriteFS } from '../models/FavouriteFS';
import { ResultService } from './result.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private fs: AngularFirestore, private resultService: ResultService) { }

  getFavouriteResults(userEmail: string){
    return this.fs.collection<FavouriteFS>('Favourites', ref =>
        ref.where('userEmail', '==' , userEmail)
            .orderBy('date','desc'))
        .valueChanges({ idField: 'itemId' });
  }

  deleteFromFavourites(favourite: FavouriteFS){
    return this.fs.collection<FavouriteFS>('Favourites').doc(favourite.itemId).delete();
  }



}
