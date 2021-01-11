import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forgotdetails } from './appmodel/forgot-password';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

    forgotPassword(forgotP: forgotdetails) : Observable<any> {

        let url = "http://localhost:8181/forgotpassword";
        return this.http.post(url, forgotP);  
   }
}
