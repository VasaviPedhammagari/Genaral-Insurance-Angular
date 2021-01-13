import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from '../appmodel/vehicle';
import { InsuranceService } from '../insurance.service';
import { VehicleModel } from '../appmodel/vehicleModel';

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

  vehicleModels: VehicleModel[];
  manufactureres: string[];
  carModels: Array<string>;
  chosenMod: string = "";
  chosenCar: string = "";
  models:string = "";
  cars:string = "";
  
  price: number = 0;

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService, private router: Router) { 
  }

  public ngOnInit(): void { 
    this.insuranceService.fetchVehicleModels().subscribe(response => {
      this.vehicleModels = response;
      this.manufactureres = [...new Set(this.vehicleModels.map(x => x.manufacturer))];
      this.carModels = new Array<string>(this.vehicleModels.length);
    })   
    this.uname = sessionStorage.getItem('userName')!;
    this.uid = sessionStorage.getItem('userId')!;
    this.vehicle.manufacturer = sessionStorage.getItem('manufacturer') || '';
    this.vehicle.model = sessionStorage.getItem('model') || '';
    this.vehicle.purchaseDate = sessionStorage.getItem('purchaseDate') || '';  
    this.VehicleForm = this.fb.group({
      vehicleType: ["", Validators.required],
      models:["", Validators.required],
      cars: ["", Validators.required],
      manufacturer: ["",Validators.required],
      model: ["",Validators.required],
      license: ["",Validators.required],
      purchaseDate: ["",Validators.required],
      regNo: ["",Validators.compose([Validators.required, Validators.pattern(/^[A-Z]{2}([ \-])[0-9]{2}[ ,][A-Z0-9]{1,2}[A-Z]\1[0-9]{4}$/)])],
      engineno: ["",Validators.compose([Validators.required, Validators.pattern('/^([A-z]{2}[A-z0-9]{5,16})$/')])],
      chassisno: ["",Validators.compose([Validators.required, Validators.pattern('/^[A-z]{17}$/')])]
    });
  }
  modo() {
    for (var i = 0; i < this.vehicleModels.length; i++) {
      if (this.vehicleModels[i].manufacturer == this.chosenMod) {
        this.carModels.push(this.vehicleModels[i].model);
      }
    }
    this.carModels = this.carModels.filter(x => x != null) as string[];
  }
  saveVehicle(){
    this.insuranceService.registerVehicle(this.vehicle).subscribe(response => {
      console.log(JSON.stringify(response));
      console.log(this.vehicle.vehicleType);
      if(response.status == 'SUCCESS') {
        let regNo = response.registeredVehicleId;
        sessionStorage.setItem('regNo',String(regNo));
        this.price = parseInt(sessionStorage.getItem('price') || '{}');
        if(this.price > 0){
          this.router.navigate(['payment']);
        }
        else{
          this.router.navigate(['choose-plan']);
        }
        
      }
      else
          this.message = response.message;
    })    
  }
}
