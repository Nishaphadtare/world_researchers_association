import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    mobile: new FormControl("", [Validators.required]),
    gender: new FormControl("female"),
    pwd: new FormControl("", [Validators.required]),
    rpwd: new FormControl("", [Validators.required]),

  });

  OnSubmitted(){
    console.log(this.registerForm);
  }

  // get Firstname(): FormControl {
  //   return this.registerForm.get('firstname') as FormControl;
  // }
  // get Lastname(): FormControl {
  //   return this.registerForm.get('lastname') as FormControl;
  // }
  // get Email(): FormControl {
  //   return this.registerForm.get('email') as FormControl;
  // }
  // get Mobile(): FormControl {
  //   return this.registerForm.get('mobile') as FormControl;
  // }
  // get Gender(): FormControl {
  //   return this.registerForm.get('gender') as FormControl;
  // }
  // get PWD(): FormControl {
  //   return this.registerForm.get('pwd') as FormControl;
  // }
  // get RPWD(): FormControl {
  //   return this.registerForm.get('rpwd') as FormControl;
  // }
  

}
