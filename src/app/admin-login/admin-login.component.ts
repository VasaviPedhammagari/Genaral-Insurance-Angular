import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { adminLogin } from '../appmodel/adminLogin';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  LoginForm:FormGroup;
  adminLogin:adminLogin = new adminLogin();

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService) { }

  public ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: ["",Validators.compose([Validators.required, CustomValidators.email])],
      password: ["",Validators.required]
  });
  }

  adminCheck(){
    alert(JSON.stringify(this.adminLogin));
    this.insuranceService.login(this.adminLogin).subscribe(response =>{
      alert(JSON.stringify(response));
    })
  }
}
