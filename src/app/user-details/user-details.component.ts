import { Component, OnInit } from '@angular/core';
import { UserDetails } from "../appmodel/user-details";
import { InsuranceService } from "../insurance.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userList:any=[];

  constructor(private insuranceService: InsuranceService, private router: Router) { }

  public ngOnInit(): void {
  }

  displayUserDetails(){
    this.insuranceService.getUserList().subscribe(data => {
      this.userList = data;
    });
  }

  backToAdminDash(){
    this.router.navigate(['admindash']);
  }

}
