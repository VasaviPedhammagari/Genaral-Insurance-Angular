import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Claim } from '../appmodel/claim';
import { InsuranceService } from '../insurance.service';
//change
import { Router } from '@angular/router';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  ClaimForm:FormGroup;
  claim:Claim = new Claim();


  constructor(private fb: FormBuilder,private router:Router, private insuranceService: InsuranceService) { }

  public ngOnInit(): void {
    this.ClaimForm = this.fb.group({
      policyNumber: ["",Validators.required],
      email: ["",Validators.compose([Validators.required, CustomValidators.email])],
      password: ["",Validators.required],
      claimReason: ["",Validators.required],
      claimAmount: ["",Validators.required]
  });
}


claimCheck(){
  alert(JSON.stringify(this.claim));
  this.insuranceService.claim(this.claim).subscribe(response =>{
    alert(JSON.stringify(response));
  })
}

}
