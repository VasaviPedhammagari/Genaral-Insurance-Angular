import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Vehicle } from '../appmodel/vehicle';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  VehicleForm:FormGroup;
  vehicle:Vehicle = new Vehicle();
  type: string[] = ['2-Wheeler', '4-Wheeler'];

  constructor(private fb: FormBuilder,private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.VehicleForm = this.fb.group({
      manufacturer: ["",Validators.required],
      model: ["",Validators.required],
      license: ["",Validators.required],
      purchaseDate: ["",Validators.required],
      regno: ["",Validators.required],
      engineno: ["",Validators.required],
      chassisno: ["",Validators.required]
    })
  }

  saveVehicle(){
    console.log("saveVehicle working!");
    console.log(this.vehicle.type);
    
  }

}
