import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
userForm: FormGroup;


constructor(){
this.userForm = new FormGroup(
{
//                    initialValue,      validators
  fullName:new FormControl("",[Validators.required, Validators.minLength(5)]),
  email:new FormControl("",[Validators.required, Validators.email]),
  mobileNumbers:new FormControl("", [Validators.required, Validators.pattern('^[0-9]{11}$')]),
  // address: {
  //   city: new FormControl('', Validators.required),
  //   postalCode: new FormControl('', Validators.required),
  //   street: new FormControl('', Validators.required),
  // },
  password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  confirmPassword: new FormControl('', Validators.required)
}
)
}

get fullName() {
  return this.userForm.get('fullName');
}

get email() {
  return this.userForm.get('email');
}

get mobileNumbers() {
  return this.userForm.get('mobileNumbers');
}

get password() {
  return this.userForm.get('password');
}

get confirmPassword() {
  return this.userForm.get('confirmPassword');
}





}
