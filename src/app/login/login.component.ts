import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Login } from '../appmodel/login';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm:FormGroup;
  login:Login = new Login();

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService) { }

  public ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: ["",Validators.compose([Validators.required, CustomValidators.email])],
      password: ["",Validators.required]
  });
  }

  loginCheck(){
    alert(JSON.stringify(this.login));
    this.insuranceService.login(this.login).subscribe(response =>{
      alert(JSON.stringify(response));
    })
  }
}
