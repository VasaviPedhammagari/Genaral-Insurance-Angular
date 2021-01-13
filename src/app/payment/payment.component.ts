import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from '../appmodel/payment';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  PaymentForm:FormGroup;
  payment: Payment = new Payment();
  constructor(private fb: FormBuilder, private router: Router, private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    sessionStorage.setItem('price', String('0'));
    sessionStorage.setItem('manufacturer', '');
    sessionStorage.setItem('model', '');
    sessionStorage.setItem('purchaseDate', '');
    this.PaymentForm = this.fb.group({
        paymentMode: ["",Validators.required],
        upiId:["",Validators.compose([Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]{2,}$/)])],
        cardNumber: ["",Validators.compose([Validators.required,Validators.pattern(/^\d{16}$/)])],
        cardHolderName:["",Validators.required],
        expiryDate:["",Validators.required],
        cvv:["",Validators.compose([Validators.required,Validators.pattern(/^\d{3}$/)])]
    });
  }
 doPayment(){
   alert(this.payment.paymentMode);
   this.insuranceService.payment(this.payment).subscribe(response =>{
     alert(JSON.stringify(response));
     this.router.navigate(['payment-summary']);
   })
 }
}
