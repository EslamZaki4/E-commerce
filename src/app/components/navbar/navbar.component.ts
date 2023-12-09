import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/user-authantication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isUserLog:boolean = true;


constructor(private useauth:UserAuthenticationService){}
  ngOnInit(): void {
this.isUserLog = this.useauth.isUserLoggedInOrNot;
console.log(this.isUserLog);


this.useauth.userstatechanged().subscribe({
next:(userState)=>{
console.log(userState);
this.isUserLog =userState;
},error:(err)=>{
console.log(err);

}
})
}

}
