import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  email: string = "";
  authState: any = null;

  constructor(private auth: AngularFireAuth, private router: Router) 
  {
    this.auth.authState.subscribe(authState => {
      this.authState = authState;
    });
  }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  signup(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  isUserLoggedIn(){   
    return this.auth.user;
  }

  logout(){
    return this.auth.signOut();
  }

  getLoggedInUserEmail(): string{
    if(this.authState?.email){
      return this.authState.email;
    }else{
      let a = JSON.parse(localStorage.getItem('user')!)
      return a['email'];
    }
  }
}
