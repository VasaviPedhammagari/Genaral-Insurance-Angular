import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService, private router: Router) { }

  public ngOnInit(): void {
    sessionStorage.removeItem('admin');
    //window.location.reload();
    this.LoginForm = this.fb.group({
      email: ["",Validators.compose([Validators.required, CustomValidators.email])],
      password: ["",Validators.required]
  });
  }

  adminCheck(){
    alert(JSON.stringify(this.adminLogin));
    this.insuranceService.adminlogin(this.adminLogin).subscribe(response =>{
      alert(JSON.stringify(response));
      if(response.status === 'SUCCESS'){
        sessionStorage.setItem('admin', "Admin");
        this.router.navigate(['/admindash']).then( () => {
          window.location.reload();
        })
      }
    })
  }
}
