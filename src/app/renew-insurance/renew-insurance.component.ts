import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MotorInsurance } from '../appmodel/motorInsurance';
import { RenewDetails } from '../appmodel/renewDetails';
import { User } from '../appmodel/user';
import { Vehicle } from '../appmodel/vehicle';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-renew-insurance',
  templateUrl: './renew-insurance.component.html',
  styleUrls: ['./renew-insurance.component.css']
})
export class RenewInsuranceComponent implements OnInit {

  renewForm:FormGroup;
  renewDetails: RenewDetails=new RenewDetails();
  motorInsurance: MotorInsurance=new MotorInsurance();
  vehicle: Vehicle = new Vehicle();
  user: User = new User();

  constructor(private fb:FormBuilder,private router:Router,private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.renewForm=this.fb.group({
      policyNumber:["",Validators.required],
      email:["",Validators.compose([Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)])],
      phoneNumber:["",Validators.compose([Validators.required,Validators.pattern(/^\d{10}$/)])]
    });
  }

  checkDetails(){
    alert("policy number : "+ this.renewDetails.policyNumber);
    alert("email id : "+this.renewDetails.email);
    this.insuranceService.renew(this.renewDetails).subscribe(response =>{
      //console.log(JSON.stringify(response));
      if(response.status == 'SUCCESS'){
        this.motorInsurance = response.motorInsurance;
        this.vehicle = this.motorInsurance.vehicle;
        this.user = this.motorInsurance.user;
        sessionStorage.setItem( 'vehicle', JSON.stringify(this.vehicle));
        sessionStorage.setItem( 'user', JSON.stringify(this.user));
        this.router.navigate(['choose-plan']);
      }else 
         alert(response.message);
    })
  }

}
