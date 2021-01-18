import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotorInsurance } from '../appmodel/motorInsurance';
import { Payment } from '../appmodel/payment';
import { User } from '../appmodel/user';
import { Vehicle } from '../appmodel/vehicle';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-plan',
  templateUrl: './insurance-plan.component.html',
  styleUrls: ['./insurance-plan.component.css']
})
export class InsurancePlanComponent implements OnInit {

  motorInsurance: MotorInsurance = new MotorInsurance();
  vehicle: Vehicle = new Vehicle();
  user: User = new User();
  payment : Payment = new Payment();

  constructor(private router: Router, private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.vehicle = JSON.parse(sessionStorage.getItem('vehicle') || '{}');
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    alert('in insurance');
  }

  saveData(data: any) {
    this.motorInsurance.planType = data.plan;
    this.motorInsurance.noOfYrs = data.planTerm;
    this.motorInsurance.vehicle = this.vehicle;
    this.motorInsurance.user = this.user;
    alert('inside save data');
    console.log(JSON.stringify(this.motorInsurance));
    this.insuranceService.choosePlan(this.motorInsurance).subscribe(response => {
      console.log(JSON.stringify(response));
      if (response.status == 'SUCCESS') {
        this.payment = response.payment;
        this.motorInsurance = this.payment.motorInsurance;
        alert(this.motorInsurance.policyNumber);
        alert(this.motorInsurance.insurancePremium);
        sessionStorage.setItem('payment', JSON.stringify(this.payment));
        this.router.navigate(['payment']);
      } else
        alert(response.message);
    })
  }
}
