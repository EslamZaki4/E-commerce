import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  UserLogBehavior: BehaviorSubject<boolean>;

  constructor() {
    this.UserLogBehavior = new BehaviorSubject<boolean>(this.isUserLoggedInOrNot);
  }

  userLogin(email: string, password: string) {
    localStorage.setItem('accesToken', '2351625');
    this.UserLogBehavior.next(true);
  }

  userLogout() {
    localStorage.removeItem('accesToken');
    this.UserLogBehavior.next(false);
  }

  get isUserLoggedInOrNot(): boolean {
    return (localStorage.getItem('accesToken'))?true:false;
  }

//to change login==login in navbar...logout==logout in navbar
userstatechanged():Observable<boolean>
{
return this.UserLogBehavior.asObservable();
}

}
