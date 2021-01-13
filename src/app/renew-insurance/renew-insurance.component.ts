import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RenewDetails } from '../appmodel/renewDetails';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-renew-insurance',
  templateUrl: './renew-insurance.component.html',
  styleUrls: ['./renew-insurance.component.css']
})
export class RenewInsuranceComponent implements OnInit {

  renewForm:FormGroup;
  renewDetails: RenewDetails=new RenewDetails();

  constructor(private fb:FormBuilder,private router:Router,private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.renewForm=this.fb.group({
      policyNumber:["",Validators.required],
      email:["",Validators.compose([Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)])],
      phoneNumber:["",Validators.compose([Validators.required,Validators.pattern(/^\d{10}$/)])]
    });
  }

  checkDetails(){
    alert("policy number : "+ this.renewDetails.policyNumber);
    alert("email id : "+this.renewDetails.email);
    this.insuranceService.renew(this.renewDetails).subscribe(response =>{
      alert(JSON.stringify(response));
      this.router.navigate(['choose-plan']);
    })
  }

}
