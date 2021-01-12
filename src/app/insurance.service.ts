import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminLogin } from './appmodel/adminLogin';
import { Login } from './appmodel/login';
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
<<<<<<< HEAD
  adminlogin(adminLogin: adminLogin) : Observable<any>{
    let url = "http://localhost:8181/adminlogin";
    return this.http.post(url, adminLogin);  
=======
  registerVehicle(vehicle: Vehicle) :Observable<any> {
    console.log("registerVehicle working!");
    let url = "http://localhost:8181/register-vehicle";
    return this.http.post(url, vehicle);
>>>>>>> 9a24f3f4d0411c9b04aebfe160caadcbf1f9402d
  }
}
