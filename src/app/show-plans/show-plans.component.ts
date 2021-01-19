import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estimate } from '../appmodel/estimate';
import { MotorInsurance } from '../appmodel/motorInsurance';

@Component({
  selector: 'app-show-plans',
  templateUrl: './show-plans.component.html',
  styleUrls: ['./show-plans.component.css']
})
export class ShowPlansComponent implements OnInit {

  constructor(private router:Router) { }

  estimate: Estimate[];
  motorInsurance: MotorInsurance = new MotorInsurance();

  ngOnInit(): void {
    this.estimate = JSON.parse(sessionStorage.getItem('estimate') || '{}');
  }

  onClickPrice(type:string, price:number, coverage:number, noOfYears:number){
    sessionStorage.setItem('type', type);
    sessionStorage.setItem('price', String(price));
    sessionStorage.setItem('coverage', String(coverage));
    sessionStorage.setItem('noOfYears', String(noOfYears));
    sessionStorage.getItem('manufacturer');
    sessionStorage.getItem('model');
    sessionStorage.getItem('user');
    this.router.navigate(['register']);
  }

}
