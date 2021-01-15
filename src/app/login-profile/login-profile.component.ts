import { Component, OnInit } from '@angular/core';
import { MotorInsurance } from '../appmodel/motorInsurance';
import { InsuranceClaim } from '../appmodel/insuranceClaim';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-login-profile',
  templateUrl: './login-profile.component.html',
  styleUrls: ['./login-profile.component.css']
})
export class LoginProfileComponent implements OnInit {

  constructor(private insuranceService: InsuranceService) { }

  policyNumber:number;
  userId : number;
  userName : string;
  motorInsuranceList : MotorInsurance[];
  policyNumberList : Array<number>;
  length1:number;
  length2:number;
  claimNumber : number;
  insuranceClaimList : InsuranceClaim[];
  claimNumberList : Array<number>;

  ngOnInit(): void {
    this.userId = parseInt(sessionStorage.getItem('userId') || '{}');
    this.userName = sessionStorage.getItem('userName') || '{}';
    this.insuranceService.insuranceDetails(this.userId).subscribe(response => {
      this.motorInsuranceList = response;
      this.length1 = this.motorInsuranceList.length;
      this.policyNumberList = new Array<number>(this.motorInsuranceList.length);
      for(var i =0; i < this.length1;i++){
        console.log(JSON.stringify(this.motorInsuranceList[i]));
        this.policyNumberList.push(parseInt(this.motorInsuranceList[i].policyNumber));
        this.insuranceService.claimDetails(parseInt(this.motorInsuranceList[i].policyNumber)).subscribe(response => {
          this.insuranceClaimList = response;
          this.claimNumberList = new Array<number>(this.insuranceClaimList.length);
        })
      }
    })
  }

}
