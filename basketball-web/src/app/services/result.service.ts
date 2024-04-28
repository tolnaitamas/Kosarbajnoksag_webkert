import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Result } from '../models/Result';
import { ResultFS } from '../models/ResultFS';
import { Favourite } from '../models/Favourite';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private fs: AngularFirestore) { }

  create(result: Result){
    return this.fs.collection<Result>('Results').add(result);
  }

  getAllResults(){
    return this.fs.collection<ResultFS>('Results', ref =>
        ref.orderBy('date','desc').limit(100))
        .valueChanges({ idField: 'resultId' });
  }

  getResultById(resultId: string){
    return this.fs.collection<ResultFS>('Results', ref =>
        ref.where('resultId', '==', resultId)
            .limit(1))
        .valueChanges({ idField: 'resultId' });
  }

  addToFavourite(result: ResultFS, email: string){
    const favouriteResult: Favourite = {
      home: result.home,
      away: result.away,
      homePts: result.homePts,
      awayPts: result.awayPts,
      homeImg: result.homeImg,
      awayImg: result.awayImg,
      date: result.date,
      userEmail: email
    };

    return this.fs.collection<Favourite>('Favourites').add(favouriteResult);
  }

}
