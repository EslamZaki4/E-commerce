import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: 'login', component:LoginComponent ,title:'login Page'},
  {path: 'editprofile', component:EditProfileComponent ,title:'Edit Profile Page'},
  {path: 'viewprofile', component:ViewProfileComponent ,title:'view Profile Page'},
]
@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModuleModule { }
