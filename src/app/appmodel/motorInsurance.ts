import { User } from "./user";
import { Vehicle } from "./vehicle";

export class MotorInsurance{
    policyNumber: string;
    planType: string;
    noOfYrs: number;
    planStartDate: string;
    planExpiryDate: string;
    totalClaimAmount: number;
    balanceClaimAmount: number;
    insurancePremium: number;
    user: User;
    vehicle: Vehicle;
}