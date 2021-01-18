import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { Claim } from '../appmodel/claim';
import { InsuranceService } from '../insurance.service';



@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  ClaimForm:FormGroup;
  claim:Claim = new Claim();
  policyNumber : number;
  policyNumberList : number[];
  email : string;
  Email : boolean;


  constructor(private fb: FormBuilder,private router:Router, private insuranceService: InsuranceService) { }

  public ngOnInit(): void {
    this.policyNumberList = JSON.parse(sessionStorage.getItem('policyNumbers') || '{}');
    this.email = sessionStorage.getItem('email') || '';
    if(this.email === ''){
       this.Email = false;
    }else {
      this.Email =true;
    }
    this.ClaimForm = this.fb.group({
      policyNumber: ["",Validators.required],
      email: ["",Validators.compose([Validators.required, CustomValidators.email])],
      password: ["",Validators.required],
      claimReason: ["",Validators.required],
      claimAmount: ["",Validators.required]
  });
}


claimCheck(){
  if(this.Email){
  this.claim.policyNumber = this.policyNumber;
  }
  this.claim.email = this.email;
  alert(JSON.stringify(this.claim));
  this.insuranceService.claim(this.claim).subscribe(response =>{
    alert(JSON.stringify('You have successfully applied for claim, after few days it will get reflected to your account'));
    this.router.navigate(['']);
  })
}

}
