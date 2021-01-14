import { Component, OnInit } from '@angular/core';
import { Claim } from '../appmodel/claim';
import { InsuranceClaim } from '../appmodel/insuranceClaim';
import { ValidateClaim } from '../appmodel/validate-claim';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-validate-claim',
  templateUrl: './validate-claim.component.html',
  styleUrls: ['./validate-claim.component.css']
})
export class ValidateClaimComponent implements OnInit {

  constructor(private insuranceService: InsuranceService) { }

  claims: InsuranceClaim[];
  validateClaim: ValidateClaim;
  claimAmount: number;

  ngOnInit(): void {
    this.insuranceService.fetchAllClaims().subscribe(response => {
      this.claims = response;
    })
  }

  onClickApprove(claimNumber: number) {
    this.validateClaim.claimAmount = this.claimAmount;
    this.validateClaim.claimNumber = claimNumber;
    this.insuranceService.validateClaim(this.validateClaim).subscribe(response => {
      alert(response);
    })
  }

  onClickDeny(claimNumber: number) {
    this.validateClaim.claimNumber = claimNumber;
    this.insuranceService.denyClaim(this.validateClaim).subscribe(response => {
      alert(response);
    })
  }

}
