import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from "ng2-validation";
import { forgotdetails } from '../appmodel/forgot-password';
import { ForgotPasswordService } from "../forgot-password.service";
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { User } from '../appmodel/user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  ForgotpassForm: FormGroup;
  forgotP: forgotdetails = new forgotdetails();
  user: User = new User();

  constructor(private fb: FormBuilder, private forgotPasswordService: ForgotPasswordService, private router: Router) { }

  public ngOnInit(): void {
    this.ForgotpassForm = this.fb.group({
      email: ["", Validators.compose([Validators.required, CustomValidators.email])],
      otp: ["", Validators.compose([Validators.required])],
      newpass1: ["", Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,12}'),
        Validators.minLength(8)
      ])
      ],
      password: ["", Validators.required]
    });
  }

  generateOtp() {
    alert('OTP Generated!');
    this.forgotPasswordService.generateOtp(this.forgotP.emailId).subscribe(response => {
      
    })
  }

  forgotPass() {
    this.forgotPasswordService.validateOtp(this.forgotP).subscribe(response => {
      if (response.message === 'valid OTP') {
        if (this.forgotP.newpass1 == this.forgotP.password) {
          this.user.email = this.forgotP.emailId;
          this.user.password = this.forgotP.password;
          this.forgotPasswordService.forgotPassword(this.user).subscribe(response => {
            alert(response.message);
            this.router.navigate(['login']);
          })
        }
        else {
          alert("The Passwords do not match.");
        }
      }
      else{
        alert('OTP is invalid');
      }
    })
  }

}