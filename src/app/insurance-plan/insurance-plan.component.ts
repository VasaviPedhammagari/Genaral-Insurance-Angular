import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estimate } from '../appmodel/estimate';
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
  payment: Payment = new Payment();
  estimate: Estimate[];
  appliedEstimates: Estimate[];
  type: string = '';
  years: string = '';
  buttonType: string;


  constructor(private router: Router, private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userDetails') || '{}');
    this.vehicle = JSON.parse(sessionStorage.getItem('vehicle') || '{}');
    console.log(JSON.stringify(this.vehicle));
    this.estimate = JSON.parse(sessionStorage.getItem('estimateBuyInsurance') || '{}');
    console.log(JSON.stringify(this.estimate));
    this.appliedEstimates = this.estimate;
  }

  onSubmit(buttonType: any): void {
    if (buttonType === "apply") {
      this.appliedEstimates = [];
      for (var i = 0; i < this.estimate.length; i++) {
        if (this.estimate[i].type === this.type && this.estimate[i].noOfYears === parseInt(this.years)) {
          this.appliedEstimates.push(this.estimate[i]);
        }
      }
    }
    if (buttonType === "clear") {
      this.type = '';
      this.years = '';
      this.appliedEstimates = this.estimate;
    }

  }

  onClickPrice(type: string, price: number, coverage: number, noOfYears: number) {
    this.motorInsurance.planType = type;
    this.motorInsurance.noOfYrs = noOfYears;
    this.motorInsurance.vehicle = this.vehicle;
    this.motorInsurance.user = this.user;
    console.log('user in motot' + JSON.stringify(this.motorInsurance.user));
    this.insuranceService.choosePlan(this.motorInsurance).subscribe(response => {
      console.log(JSON.stringify(response));
      if (response.status == 'SUCCESS') {
        this.payment = response.payment;
        this.motorInsurance = this.payment.motorInsurance;
        sessionStorage.setItem('payment', JSON.stringify(this.payment));
        this.router.navigate(['payment']);
      }
      else
        alert(response.message);
    })
  }

}
