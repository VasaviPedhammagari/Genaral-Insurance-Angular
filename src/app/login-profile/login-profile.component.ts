import { Component, OnInit } from '@angular/core';
import { MotorInsurance } from '../appmodel/motorInsurance';
import { InsuranceClaim } from '../appmodel/insuranceClaim';
import { User } from '../appmodel/user';
import { InsuranceService } from '../insurance.service';
import { Vehicle } from '../appmodel/vehicle';
import { Payment } from '../appmodel/payment';
import { Estimate } from '../appmodel/estimate';

@Component({
  selector: 'app-login-profile',
  templateUrl: './login-profile.component.html',
  styleUrls: ['./login-profile.component.css']
})
export class LoginProfileComponent implements OnInit {
  ifInsurance: boolean;
  payment: Payment;

  constructor(private insuranceService: InsuranceService) { }

  policyNumber: number;
  userId: number;
  userName: string;
  motorInsuranceList: MotorInsurance[];
  //policyNumberList : Array<number>;
  length1: number;
  length2: number;
  claimNumber: number;
  insuranceClaimList: InsuranceClaim[];
  claimNumberList: Array<number>;
  policyNumberList: number[];
  user: User;
  vehicle: Vehicle;
  ifVehicle: boolean;
  ifPayment: boolean;
  ifChoosePlan: boolean;
  estimate: Estimate[];

  ngOnInit(): void {
    this.userId = parseInt(sessionStorage.getItem('userId') || '{}');
    this.userName = sessionStorage.getItem('userName') || '{}';
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.insuranceService.getVehiclesByUserId(this.userId).subscribe(response => {
      console.log(JSON.stringify(response));
      if (response.message === "No pending in registration process" || response.message === "No vehicle is registered") {
        this.ifVehicle = true;
      } else if (response.message === "only vehicle registraion is done") {
        this.vehicle = response.vehicle;
        this.insuranceService.fetchPremiums(this.vehicle).subscribe(response => {
          this.estimate = response;
          alert("heloo");
          sessionStorage.setItem('estimateBuyInsurance', JSON.stringify(this.estimate));
        })
        sessionStorage.setItem('vehicle', JSON.stringify(this.vehicle));
        this.ifChoosePlan = true;
      } else if (response.message === "payment is pending") {
        this.payment = response.payment;
        sessionStorage.setItem('payment', JSON.stringify(this.payment));
        this.ifPayment = true;
      }
    })
    //alert(this.ifChoosePlan);
    this.insuranceService.insuranceDetails(this.userId).subscribe(response => {
      this.motorInsuranceList = response;
      if (this.motorInsuranceList.length == 0) {
        this.ifInsurance = false;
      } else {
        this.ifInsurance = true;
        var sortedArray: MotorInsurance[] = this.motorInsuranceList.sort((obj1, obj2) => {
          if (obj1.policyNumber < obj2.policyNumber) {
            return 1;
          }
          if (obj1.policyNumber > obj2.policyNumber) {
            return -1;
          }
          return 0;
        });
        this.length1 = this.motorInsuranceList.length;
        this.policyNumberList = new Array<number>(this.motorInsuranceList.length);
        for (var i = 0; i < this.length1; i++) {
          console.log(JSON.stringify(this.motorInsuranceList[i]));
          this.insuranceService.claimDetails(parseInt(this.motorInsuranceList[i].policyNumber)).subscribe(response => {
            this.insuranceClaimList = response;
            console.log(this.insuranceClaimList);
            this.claimNumberList = new Array<number>(this.insuranceClaimList.length);
          })
          this.policyNumberList[i] = parseInt(this.motorInsuranceList[i].policyNumber);
        }
      }
      console.log(JSON.stringify(this.user));
      sessionStorage.setItem('policyNumbers', JSON.stringify(this.policyNumberList));
      sessionStorage.setItem('email', this.user.email);
      sessionStorage.setItem('mobileNumber', String(this.user.phoneNo));
      sessionStorage.setItem('userDetails', JSON.stringify(this.user));
      console.log(JSON.stringify(this.policyNumberList));
    })
  }

}
