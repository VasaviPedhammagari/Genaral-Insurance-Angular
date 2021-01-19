import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GeneralInsurance-II';

  userName: string;
  ifUsername: boolean;
  ifAdmin: boolean;

  ngOnInit() {
    if(sessionStorage['adminLogin']){
      this.ifAdmin = true;
    }
    else{
      this.ifAdmin = false;
    }
    this.userName = sessionStorage.getItem('userName') || '';
    if(this.userName === ''){
      this.ifUsername = false;
    }
    else{
      this.ifUsername = true;
    }
  }
}
