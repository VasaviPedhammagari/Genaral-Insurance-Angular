import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';
import { MotorInsurance } from './appmodel/motorInsurance';
import { Payment } from './appmodel/payment';
import { RenewDetails } from './appmodel/renewDetails';
import { User } from './appmodel/user';
import { Vehicle } from './appmodel/vehicle';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) { }
  
  registerUser(user: User) : Observable<any> {
    let url = "http://localhost:8181/register";
    return this.http.post(url, user);   
  }
  login(login: Login) : Observable<any>{
    let url = "http://localhost:8181/login";
    return this.http.post(url, login);  
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
}
