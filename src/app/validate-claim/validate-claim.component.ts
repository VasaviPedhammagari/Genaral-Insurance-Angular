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
  approvedClaims: InsuranceClaim[];
  pendingClaims: InsuranceClaim[];
  validateClaim: ValidateClaim = new ValidateClaim();
  claimAmount: number = 0;
  len: number = 0;

  ngOnInit(): void {
    this.insuranceService.fetchAllClaims().subscribe(response => {
      this.claims = response;
      for(var i = 0;i < this.claims.length;i++){
        if(this.claims[i].claimStatus === 'PENDING'){
          this.len++;
        }
      }
      this.pendingClaims = new Array(this.len);
      this.approvedClaims = new Array(this.claims.length - this.len);
      for(var i = 0, j = 0, k = 0;i < this.claims.length;i++){
        if(this.claims[i].claimStatus === 'PENDING'){
          this.pendingClaims[j++] = this.claims[i];
        }
        else{
          this.approvedClaims[k++] = this.claims[i];
        }
      }
    })
  }

  onClickApprove(claimNumber: number) {
    this.validateClaim.claimAmount = this.claimAmount;
    this.validateClaim.claimNumber = claimNumber;
    this.insuranceService.validateClaim(this.validateClaim).subscribe(response => {
      alert('Approved successfully!');
    })
  }

  onClickDeny(claimNumber: number) {
    this.validateClaim.claimNumber = claimNumber;
    alert(JSON.stringify(this.validateClaim));
    this.insuranceService.denyClaim(this.validateClaim).subscribe(response => {
      alert(response);
    })
  }

}
