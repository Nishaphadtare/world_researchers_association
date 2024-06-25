import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    pwd: new FormControl("", [Validators.required])
  });
 
  loginSubmitted(){
    console.log(this.loginForm);
    
  }
}

