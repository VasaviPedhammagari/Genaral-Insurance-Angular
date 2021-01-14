import { InsuranceDetails } from "./insuranceDetails";

export class InsuranceClaim {
    claimNumber: number;
    claimStatus: string;
    claimDate: string;
    claimReason:string;
    claimAmount:number;
    insuranceDetails: InsuranceDetails;
}
