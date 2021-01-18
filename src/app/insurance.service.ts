import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminLogin } from './appmodel/adminLogin';
import { Estimate } from './appmodel/estimate';
import { Login } from './appmodel/login';
import { MotorInsurance } from './appmodel/motorInsurance';
import { Payment } from './appmodel/payment';
import { RenewDetails } from './appmodel/renewDetails';
import { User } from './appmodel/user';
import { Vehicle } from './appmodel/vehicle';
import { Claim } from './appmodel/claim';
import { VehicleModel } from './appmodel/vehicleModel';
import { InsuranceClaim } from './appmodel/insuranceClaim';
import { ValidateClaim } from './appmodel/validate-claim';
import { UserDetails } from './appmodel/user-details';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    let url = "http://localhost:8181/register";
    return this.http.post(url, user);
  }

  login(login: Login): Observable<any> {
    let url = "http://localhost:8181/login";
    return this.http.post(url, login);
  }

  fetchVehicleModels(): Observable<VehicleModel[]> {
    let url = "http://localhost:8181/fetchVehicleModel";
    return this.http.get<VehicleModel[]>(url);
  }

  fetchPremiums(vehicle: Vehicle): Observable<Estimate[]> {
    let url = "http://localhost:8181/get-estimates";
    return this.http.post<Estimate[]>(url, vehicle);
  }

  adminlogin(adminLogin: adminLogin): Observable<any> {
    let url = "http://localhost:8181/adminlogin";
    return this.http.post(url, adminLogin);
  }

  registerVehicle(vehicle: Vehicle): Observable<any> {
    console.log("registerVehicle working!");
    let url = "http://localhost:8181/register-vehicle";
    return this.http.post(url, vehicle);
  }

  renew(renewDetails: RenewDetails): Observable<any> {
    let url = "http://localhost:8181/renew";
    return this.http.post(url, renewDetails);
  }

  choosePlan(motorInsurance: MotorInsurance): Observable<any> {
    let url = "http://localhost:8181/choose-plan";
    return this.http.post(url, motorInsurance);
  }

  payment(payment: Payment): Observable<any> {
    let url = "http://localhost:8181/payment";
    return this.http.post(url, payment);
  }

  claim(claim: Claim): Observable<any> {
    let url = "http://localhost:8181/claim";
    return this.http.post(url, claim);
  }

  fetchAllClaims(): Observable<InsuranceClaim[]> {
    let url = "http://localhost:8181/validate";
    return this.http.get<InsuranceClaim[]>(url);
  }

  validateClaim(validateClaim: ValidateClaim): Observable<any> {
    let url = "http://localhost:8181/validate-claim";
    return this.http.post(url, validateClaim);
  }

  denyClaim(validateClaim: ValidateClaim): Observable<any> {
    let url = "http://localhost:8181/deny-claim";
    return this.http.post(url, validateClaim);
  }
  addVehicle(vehicleModel: VehicleModel) : Observable<any> {
    let url = "http://localhost:8181/addnewvehicle";
    return this.http.post(url,vehicleModel);
  }

  insuranceDetails(userId : number) : Observable<MotorInsurance[]> {
    let url = "http://localhost:8181/insurancedetails?userId="+userId;
    return this.http.get<MotorInsurance[]>(url);
  }

  claimDetails(policyNumber : number) : Observable<InsuranceClaim[]> {
    let url = "http://localhost:8181/claimdetails?policyNumber="+policyNumber;
    return this.http.get<InsuranceClaim[]>(url);
  }
  
  getVehicleList() :Observable<any> {
    let url = "http://localhost:8181/listvehiclemodel";
    return this.http.get<VehicleModel>(url);
  }

  getUserList() :Observable<any> {
    let url = "http://localhost:8181/userdetails";
    return this.http.get<UserDetails>(url);
  }
  updateProfile(user: User) :Observable<any> {
    let url = "http://localhost:8181/update";
    return this.http.post(url, user);
  }

  getVehiclesByUserId(userId : number) : Observable<any> {
    let url ="http://localhost:8181/vehicledetails?userId="+userId;
    return this.http.get(url);
  }
  fetchUserDetails(userId : number) : Observable<User> {
    let url = "http://localhost:8181/user-details?userId="+userId;
    return this.http.get<User>(url);
  }
}
