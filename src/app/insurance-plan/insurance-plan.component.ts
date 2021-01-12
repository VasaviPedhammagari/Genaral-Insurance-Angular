import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-plan',
  templateUrl: './insurance-plan.component.html',
  styleUrls: ['./insurance-plan.component.css']
})
export class InsurancePlanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveData(data:any){
    alert("plan : "+data.plan);
    alert("plan term : "+data.planTerm+" year ");
    this.router.navigate(['payment']);
  }
}
