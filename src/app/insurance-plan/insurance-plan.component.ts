import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotorInsurance } from '../appmodel/motorInsurance';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-plan',
  templateUrl: './insurance-plan.component.html',
  styleUrls: ['./insurance-plan.component.css']
})
export class InsurancePlanComponent implements OnInit {
  
  motorInsurance:MotorInsurance = new MotorInsurance();

  constructor(private router: Router,private insuranceService: InsuranceService) { }


  ngOnInit(): void {
  }
  saveData(data:any){
    alert("plan : "+data.plan);
    alert("plan term : "+data.planTerm+" year ");
    this.motorInsurance.planType=data.plan;
    this.motorInsurance.noOfYrs=data.planTerm;    
    this.insuranceService.choosePlan(this.motorInsurance).subscribe(response =>{
      alert(JSON.stringify(response));
      this.router.navigate(['payment']);
    })
  }
}
