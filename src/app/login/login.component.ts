import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ValidatorFn, FormGroupDirective, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {
    this.loginFormGroup = this.fb.group({
      'username': [null],
      'password': [null]
    });

  }

  ngOnInit() {
  }

  authenticate() {
    if(this.loginFormGroup.valid) {
      if(this.loginFormGroup.value.username == 'binod' && 
          this.loginFormGroup.value.password == 'binod') {
            this.router.navigate(['dashboard']);
      }
      else {
        alert('Invalid Credentials');
      }
    }
  }

}
