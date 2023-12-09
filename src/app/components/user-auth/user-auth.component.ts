import { Component, Inject, OnInit } from '@angular/core';
import {  UserAuthenticationService } from 'src/app/user-authantication.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
user:boolean = true;
 authServices=Inject(UserAuthenticationService)
constructor(private authService:UserAuthenticationService){}
  ngOnInit(): void {
    this.user =this.authService.isUserLoggedInOrNot;
    console.log(this.user);
  }




  loginFunc(email:string, password:string)
  {
    this.authService.userLogin(email,password)
this.user =this.authService.isUserLoggedInOrNot;
// console.log(this.user);
  }





  logOutFunc()
  {
    this.authService.userLogout();
//سايب السطرداعشان يسمع عالطول منغيرماعمل ريفريش
    this.user =this.authService.isUserLoggedInOrNot;
    // console.log(this.user);
  }


}




