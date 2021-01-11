import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from "ng2-validation";
import { resetdetails } from '../appmodel/reset-password';
import { ResetPasswordService } from '../reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  ResetPassForm:FormGroup;
  resetP:resetdetails = new resetdetails();

  constructor(private fb:FormBuilder, private resetPasswordService : ResetPasswordService) { }

  public ngOnInit(): void {
    this.ResetPassForm = this.fb.group({
      oldpass: ["",Validators.required],
      newpass1: ["",Validators.compose([
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]'),
          Validators.minLength(8)
         ])
      ],
      newpass2: ["",Validators.required]
  });
  }

  resetPass(){
    //write code for verifying the old password with from database
    if(this.resetP.newpass1 == this.resetP.newpass2){
      this.resetPasswordService.resetPassword(this.resetP).subscribe(response => {
        alert(JSON.stringify(response));
    })
    }
    else{
      alert("The Passwords do not match.");
    }
  }
  
}