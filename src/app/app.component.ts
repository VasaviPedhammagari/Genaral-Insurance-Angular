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

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName') || '';
    if(this.userName === ''){
      this.ifUsername = false;
    }
    else{
      this.ifUsername = true;
    }
  }
}
