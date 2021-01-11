import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resetdetails } from './appmodel/reset-password';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private http: HttpClient) { }

  resetPassword(resetP: resetdetails) : Observable<any> {

    let url = "http://localhost:8181/resetpassword";
    return this.http.post(url, resetP);   
  }
}
