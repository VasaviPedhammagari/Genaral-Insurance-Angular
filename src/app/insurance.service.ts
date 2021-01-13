import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estimate } from './appmodel/estimate';
import { Login } from './appmodel/login';
import { User } from './appmodel/user';
import { Vehicle } from './appmodel/vehicle';
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
    let url = "http://localhost:8181//get-estimates";
    return this.http.post<Estimate[]>(url, vehicle);
  }
  registerVehicle(vehicle: Vehicle) :Observable<any> {
    console.log("registerVehicle working!");
    let url = "http://localhost:8181/register-vehicle";
    return this.http.post(url, vehicle);
  }
}
