import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService, private router: Router) { }

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
      if(response.status === 'SUCCESS'){
        alert(response.userName);
        sessionStorage.setItem('userName', response.userName);
        sessionStorage.setItem('userId', response.userId);
        this.router.navigate(['login-profile']).then( () => {
          window.location.reload();
        });
      }
    })
  }
}
