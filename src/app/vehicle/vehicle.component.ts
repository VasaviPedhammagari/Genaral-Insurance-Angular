import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Vehicle } from '../appmodel/vehicle';
import { InsuranceService } from '../insurance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  VehicleForm:FormGroup;
  vehicle:Vehicle = new Vehicle();
  type: string[] = ['2-Wheeler', '4-Wheeler'];
  message: string;
  uname:string;
  uid:string;
  

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService, private router: Router) { 
  }

  public ngOnInit(): void {    
    this.uname = sessionStorage.getItem('userName')!;
    this.uid = sessionStorage.getItem('userId')!;
    this.VehicleForm = this.fb.group({
      vehicleType: ["", Validators.required],
      manufacturer: ["",Validators.required],
      model: ["",Validators.required],
      license: ["",Validators.required],
      purchaseDate: ["",Validators.required],
      regNo: ["",Validators.compose([Validators.required, Validators.pattern(/^[A-Z]{2}([ \-])[0-9]{2}[ ,][A-Z0-9]{1,2}[A-Z]\1[0-9]{4}$/)])],
      engineno: ["",Validators.compose([Validators.required, Validators.pattern('/^([A-z]{2}[A-z0-9]{5,16})$/')])],
      chassisno: ["",Validators.compose([Validators.required, Validators.pattern('/^[A-z]{17}$/')])]
    });
  }

  saveVehicle(){
    this.insuranceService.registerVehicle(this.vehicle).subscribe(response => {
      console.log(JSON.stringify(response));
      console.log(this.vehicle.vehicleType);
      if(response.status == 'SUCCESS') {
        let regNo = response.registeredVehicleId;
        sessionStorage.setItem('regNo',String(regNo));
        this.router.navigate(['choose-plan'])
      }
      else
          this.message = response.message;
    })    
  }
}
