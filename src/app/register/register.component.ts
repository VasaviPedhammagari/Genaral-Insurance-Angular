import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Address } from '../appmodel/address';
import { User } from '../appmodel/user';
import { InsuranceService } from '../insurance.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegForm: FormGroup;
  user: User = new User();
  address: Address = new Address();
  user1: User;

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService, private router: Router) {
  }

  public ngOnInit(): void {
    if (sessionStorage['user']) {
      this.router.navigate(['vehicle-registration']);
    }

    this.RegForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)])],
      dateOfBirth: ["", Validators.required],
      phoneno: ["", Validators.compose([Validators.required, Validators.pattern(/^\d{10}$/)])],
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      pincode: ["", Validators.compose([Validators.required, Validators.pattern(/^\d{6}$/)])],
      password1: ["", Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,12}')
      ])
      ],
      password2: ["", Validators.required]
    });
  }

  register() {
    console.log(JSON.stringify(this.user));
    if (this.user.password == this.user.password2) {
      this.user.address = this.address;
      this.insuranceService.registerUser(this.user).subscribe(response => {
        console.log(JSON.stringify(response));
        if (response.status == 'SUCCESS') {
          alert(response.message);
          this.user = response.user;
          sessionStorage.setItem('userDetails', JSON.stringify(this.user));
          this.router.navigate(['login']);
        }
        else
          alert(response.message);
      })
    }
    else {
      alert("Password mismatch!");
    }
  }

}