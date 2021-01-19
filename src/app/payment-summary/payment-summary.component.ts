import { Component, OnInit } from '@angular/core';
import { MotorInsurance } from '../appmodel/motorInsurance';
import { User } from '../appmodel/user';
import { Vehicle } from '../appmodel/vehicle';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.css']
})
export class PaymentSummaryComponent implements OnInit {
  paymentId: number;
  motorInsurance: MotorInsurance = new MotorInsurance();
  vehicle: Vehicle = new Vehicle();
  user: User = new User();

  constructor() {
    this.paymentId = parseInt(sessionStorage.getItem('paymentId') || '{}');
    this.motorInsurance = JSON.parse(sessionStorage.getItem('motorInsurance') || '{}');
  }

  ngOnInit(): void {
    sessionStorage.removeItem('manufacturer');
    sessionStorage.removeItem('model');
    sessionStorage.removeItem('purchaseDate');
  }

}
