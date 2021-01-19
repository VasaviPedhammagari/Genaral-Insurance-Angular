import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MotorInsurance } from '../appmodel/motorInsurance';
import { Payment } from '../appmodel/payment';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  PaymentForm: FormGroup;
  payment: Payment = new Payment();
  motorInsurance: MotorInsurance = new MotorInsurance();
  paymentId: number;
  constructor(private fb: FormBuilder, private router: Router, private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    sessionStorage.setItem('price', String('0'));
    sessionStorage.setItem('manufacturer', '');
    sessionStorage.setItem('model', '');
    sessionStorage.setItem('purchaseDate', '');
    this.payment = JSON.parse(sessionStorage.getItem('payment') || '{}');
    this.motorInsurance = this.payment.motorInsurance;
    console.log(JSON.stringify(this.motorInsurance));
    this.PaymentForm = this.fb.group({
      paymentMode: ["", Validators.required],
      upiId: ["", Validators.compose([Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]{2,}$/)])],
      cardNumber: ["", Validators.compose([Validators.required, Validators.pattern(/^\d{16}$/)])],
      cardHolderName: ["", Validators.required],
      expiryDate: ["", Validators.required],
      cvv: ["", Validators.compose([Validators.required, Validators.pattern(/^\d{3}$/)])]
    });
  }
  doPayment() {
    console.log(JSON.stringify(this.payment));
    this.insuranceService.payment(this.payment).subscribe(response => {
      console.log(JSON.stringify(response));
      this.paymentId = response.paymentId;
      sessionStorage.setItem('paymentId', String(this.paymentId));
      sessionStorage.setItem('motorInsurance', JSON.stringify(this.motorInsurance));
      this.router.navigate(['payment-summary']);
    })
  }
}
