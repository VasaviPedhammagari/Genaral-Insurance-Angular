import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceDetails} from '../appmodel/insuranceDetails';

@Component({
  selector: 'app-insurance-plan',
  templateUrl: './insurance-plan.component.html',
  styleUrls: ['./insurance-plan.component.css']
})
export class InsurancePlanComponent implements OnInit {
  
  insuranceDetails:InsuranceDetails = new InsuranceDetails();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveData(data:any){
    alert("plan : "+data.plan);
    alert("plan term : "+data.planTerm+" year ");
    this.insuranceDetails.planType=data.plan;
    this.insuranceDetails.noOfYrs=data.planTerm;    
    this.router.navigate(['payment']);
  }
}
