import { InsuranceDetails } from "./insuranceDetails";
import { MotorInsurance } from "./motorInsurance";
import { User } from "./user";
import { Vehicle } from "./vehicle";

export class InsuranceClaim {
    claimNumber: number;
    claimStatus: string;
    claimDate: string;
    claimReason:string;
    claimAmount:number;
    motorInsurance: MotorInsurance;
    user: User;
    vehicle: Vehicle;
}
