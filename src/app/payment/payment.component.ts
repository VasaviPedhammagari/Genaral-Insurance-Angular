import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from '../appmodel/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  PaymentForm:FormGroup;
  payment: Payment = new Payment();
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.PaymentForm = this.fb.group({
        paymentMode: ["",Validators.required],
        upiId:["",Validators.required],
        cardNumber: ["",Validators.compose([Validators.required,Validators.pattern(/^\d{16}$/)])],
        cardHolderName:["",Validators.required],
        expiryDate:["",Validators.required],
        cvv:["",Validators.compose([Validators.required,Validators.pattern(/^\d{3}$/)])]
    });
  }
 doPayment(){
   alert(this.payment.paymentMode);
   this.router.navigate(['payment-summary']);
 }
}
