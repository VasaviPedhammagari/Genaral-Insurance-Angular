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
  adminlogin(adminLogin: adminLogin) : Observable<any>{
    let url = "http://localhost:8181/adminlogin";
    return this.http.post(url, adminLogin);  
  }
  registerVehicle(vehicle: Vehicle) :Observable<any> {
    console.log("registerVehicle working!");
    let url = "http://localhost:8181/register-vehicle";
    return this.http.post(url, vehicle);
  }


  renew(renewDetails:RenewDetails) :Observable<any> {
    let url = "http://localhost:8181/renew";
    return this.http.post(url,renewDetails);
  }

  choosePlan(motorInsurance: MotorInsurance) : Observable<any> {
     let url = "http://localhost:8181/choose-plan";
     return this.http.post(url,motorInsurance);
  }

  payment(payment: Payment) :Observable<any> {
    let url = "http://localhost:8181/payment";
    return this.http.post(url,payment);
  }

  claim(claim: Claim) : Observable<any>{
    let url = "http://localhost:8181/claim";
    return this.http.post(url, claim);  
  }
  addVehicle(vehicleModel: VehicleModel) : Observable<any> {
    let url = "http://localhost:8181/addnewvehicle";
    return this.http.post(url,vehicleModel);
  }
  getVehicleList() :Observable<any> {
    let url = "http://localhost:8181/listvehiclemodel";
    return this.http.get<VehicleModel>(url);
  }
}
