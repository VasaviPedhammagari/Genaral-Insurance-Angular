import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VehicleModel } from '../appmodel/vehicleModel';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-premium-calulator',
  templateUrl: './premium-calulator.component.html',
  styleUrls: ['./premium-calulator.component.css']
})
export class PremiumCalulatorComponent implements OnInit {

  constructor(private insuranceService: InsuranceService) {}
  

  premiumForm: FormGroup;
  vehicleModels: VehicleModel[];
  manufactureres: string[];
  selectedManufacturer: string;
  carModels: string[];

  

  ngOnInit(): void {
    this.insuranceService.fetchVehicleModels().subscribe(response => {
      this.vehicleModels = response;
      this.manufactureres = [...new Set(this.vehicleModels.map(x => x.manufacturer))];
    })
  }

  

}
