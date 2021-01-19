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
    if (sessionStorage['user']) {
      this.router.navigate(['vehicle-registration']);
    }
    this.LoginForm = this.fb.group({
      email: ["",Validators.compose([Validators.required, CustomValidators.email])],
      password: ["",Validators.required]
  });
  }

  loginCheck(){
    this.insuranceService.login(this.login).subscribe(response =>{
      if(response.status === 'SUCCESS'){
        sessionStorage.setItem('userName', response.userName);
        sessionStorage.setItem('userId', response.userId);
        this.insuranceService.fetchUserDetails(response.userId).subscribe(response => {
          sessionStorage.setItem('user', JSON.stringify(response));
        })
        this.router.navigate(['login-profile']).then( () => {
          window.location.reload();
        });
      }
      else
        alert(response.message);
    })
  }
}
