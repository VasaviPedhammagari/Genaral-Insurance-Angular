import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { InsuranceService } from '../insurance.service';
import { Router } from '@angular/router';
import { VehicleModel } from '../appmodel/vehicleModel';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  
  AddVehicleForm:FormGroup;
  vehicleModel:VehicleModel = new VehicleModel();
  types = ['2-Wheeler', '4-Wheeler'];

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService, private router: Router) { }

  public ngOnInit(): void {
    this.AddVehicleForm = this.fb.group({
      modelId: ["",Validators.required],
      manufacturer : ["",Validators.required],
      model : ["",Validators.required],
      price: ["",Validators.required],
      type: ["",Validators.required]
    })
  }
  addVehicle(){
    this.insuranceService.addVehicle(this.vehicleModel).subscribe(response => {
      alert(JSON.stringify(response));
      if(response.status == 'SUCCESS') {
        alert("Vehicle added successfully");
        this.router.navigate(['admindash']);
      }
      else {
        alert("Failed to add Vehicle");
      }
    })
  }

}
