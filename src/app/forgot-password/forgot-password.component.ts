import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from "ng2-validation";
import { forgotdetails } from '../appmodel/forgot-password';
import { ForgotPasswordService } from "../forgot-password.service";

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

  constructor(private fb:FormBuilder, private forgotPasswordService : ForgotPasswordService) { }

  public ngOnInit(): void {
    this.ForgotpassForm = this.fb.group({
      email: ["",Validators.compose([Validators.required, CustomValidators.email])],
      newpass1: ["",Validators.compose([
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]'),
          Validators.minLength(8)
         ])
      ],
      newpass2: ["",Validators.required]
  });
  }

  forgotPass(){
    //write code to update new password to the user
    if(this.forgotP.newpass1 == this.forgotP.newpass2){
      this.forgotPasswordService.forgotPassword(this.forgotP).subscribe(response => {
        alert(JSON.stringify(response));
    })
    }
    else{
      alert("The Passwords do not match.");
    }
  }
  
}