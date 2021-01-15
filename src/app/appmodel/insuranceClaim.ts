import { InsuranceDetails } from "./insuranceDetails";
import { MotorInsurance } from "./motorInsurance";

export class InsuranceClaim {
    claimNumber: number;
    claimStatus: string;
    claimDate: string;
    claimReason:string;
    claimAmount:number;
    motorInsurance: MotorInsurance;
}
