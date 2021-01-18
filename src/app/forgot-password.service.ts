import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forgotdetails } from './appmodel/forgot-password';
import { User } from './appmodel/user';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

    generateOtp(email: string) : Observable<any> {

      let url = "http://localhost:8181/otp/generate";
      return this.http.post(url, email);  
    }

    validateOtp(forgotP:forgotdetails) : Observable<any> {

      let url = "http://localhost:8181/otp/validate";
      return this.http.post(url, forgotP);  
    }

    forgotPassword(user: User) : Observable<any> {

        let url = "http://localhost:8181/resetpassword";
        return this.http.post(url, user);
    }

}
