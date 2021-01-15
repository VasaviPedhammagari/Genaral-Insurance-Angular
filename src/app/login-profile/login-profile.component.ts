import { Component, OnInit } from '@angular/core';
import { MotorInsurance } from '../appmodel/motorInsurance';
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
  length:number;

  ngOnInit(): void {
    this.userId = parseInt(sessionStorage.getItem('userId') || '{}');
    this.userName = sessionStorage.getItem('userName') || '{}';
    this.insuranceService.insuranceDetails(this.userId).subscribe(response => {
      this.motorInsuranceList = response;
      this.length = this.motorInsuranceList.length;
      this.policyNumberList = new Array<number>(this.motorInsuranceList.length);
      for(var i =0; i < this.length;i++){
        console.log(JSON.stringify(this.motorInsuranceList[i]));
        this.policyNumberList.push(parseInt(this.motorInsuranceList[i].policyNumber));
      }
    })
  }

}
