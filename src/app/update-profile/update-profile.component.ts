import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../appmodel/address';
import { User } from '../appmodel/user';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService, private router: Router) { }

  RegForm: FormGroup;
  user: User = new User();
  address: Address = new Address();

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userDetails') || '{}');
    this.address = this.user.address;
    this.RegForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)])],
      dateOfBirth: ["", Validators.required],
      phoneno: ["", Validators.compose([Validators.required, Validators.pattern(/^\d{10}$/)])],
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      pincode: ["", Validators.compose([Validators.required, Validators.pattern(/^\d{6}$/)])]
    });
  }

  update() {
    this.insuranceService.updateProfile(this.user).subscribe(response => {
      alert(JSON.stringify(response));
    })
  }

}
