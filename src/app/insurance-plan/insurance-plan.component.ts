import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../appmodel/address';
import { MotorInsurance } from '../appmodel/motorInsurance';
import { User } from '../appmodel/user';
import { Vehicle } from '../appmodel/vehicle';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-plan',
  templateUrl: './insurance-plan.component.html',
  styleUrls: ['./insurance-plan.component.css']
})
export class InsurancePlanComponent implements OnInit {
  
  motorInsurance:MotorInsurance = new MotorInsurance();
  vehicle: Vehicle = new Vehicle();
  user : User = new User();
  address : Address = new Address();

  constructor(private router: Router,private insuranceService: InsuranceService) { }


  ngOnInit(): void {
    this.vehicle = JSON.parse(sessionStorage.getItem('vehicle') || '{}');
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.address = this.user.address;
    this.user.address = this.address;
  }

  saveData(data:any){
    alert("plan : "+data.plan);
    alert("plan term : "+data.planTerm+" year ");
    this.motorInsurance.planType=data.plan;
    this.motorInsurance.noOfYrs=data.planTerm;  
    this.motorInsurance.vehicle= this.vehicle;

    this.motorInsurance.user = this.user;
    alert(this.motorInsurance.user.userId);
    alert(this.vehicle.regNo);
    console.log(JSON.stringify(this.motorInsurance));
    this.insuranceService.choosePlan(this.motorInsurance).subscribe(response =>{
      console.log(JSON.stringify(response));
      if(response.status == 'SUCCESS'){
          this.motorInsurance = response.motorInsurance;
          alert(this.motorInsurance.policyNumber);
          alert(this.motorInsurance.insurancePremium);
          sessionStorage.setItem('motorInsurance', JSON.stringify(this.motorInsurance));
          this.router.navigate(['payment']);
      }else
       alert(response.message);
    })
  }
}
