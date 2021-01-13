import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';
import { User } from './appmodel/user';
import { Vehicle } from './appmodel/vehicle';
import { Claim } from './appmodel/claim';


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
  claim(claim: Claim) : Observable<any>{
    let url = "http://localhost:8181/claim";
    return this.http.post(url, claim);  
  }
}
