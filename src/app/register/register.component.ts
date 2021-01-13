import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Address } from '../appmodel/address';
import { User } from '../appmodel/user';
import { InsuranceService } from '../insurance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegForm:FormGroup;
  user:User = new User();
  address:Address = new Address();
  message: string;

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService, private router: Router) {
   }

  public ngOnInit(): void {
    this.RegForm = this.fb.group({
      username: ["",Validators.required],
      email: ["",Validators.compose([Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)])],
      dateOfBirth: ["",Validators.required],
      phoneno: ["",Validators.compose([Validators.required, Validators.pattern(/^\d{10}$/)])],
      street: ["",Validators.required],
      city: ["",Validators.required],
      state: ["",Validators.required],
      pincode: ["",Validators.compose([Validators.required,Validators.pattern(/^\d{6}$/)])],
      password1: ["",Validators.compose([
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,12}')
         ])
      ],
      password2: ["",Validators.required]
  });
  }

  register(){
    if(this.user.password == this.user.password2){  
      this.user.address = this.address;
      this.insuranceService.registerUser(this.user).subscribe(response => {
        alert(JSON.stringify(response));
        if(response.status == 'SUCCESS') {
          let userId = response.registeredUserId;
          let userName = response.registeredUserName;
          sessionStorage.setItem('userId', String(userId));
          sessionStorage.setItem('userName', userName);
          this.router.navigate(['vehicle-registration']);
        }
        else
          this.message = response.message;
    })
    }
    else{
      alert("Password mismatch!");
    }
  }
  
}