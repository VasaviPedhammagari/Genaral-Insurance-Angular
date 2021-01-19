import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Estimate } from '../appmodel/estimate';
import { Vehicle } from '../appmodel/vehicle';
import { VehicleModel } from '../appmodel/vehicleModel';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-premium-calulator',
  templateUrl: './premium-calulator.component.html',
  styleUrls: ['./premium-calulator.component.css']
})
export class PremiumCalulatorComponent implements OnInit {

  constructor(private insuranceService: InsuranceService, private router: Router) { }

  premiumForm: FormGroup;
  vehicleModels: VehicleModel[];
  manufactureres: string[];
  selectedManufacturer: string;
  carModels: Array<string>;
  chosenMod: string = "";
  chosenCar: string = "";
  purchaseDate: string;
  vehicle: Vehicle = new Vehicle();
  estimate: Estimate[];

  ngOnInit(): void {
    this.insuranceService.fetchVehicleModels().subscribe(response => {
      this.vehicleModels = response;
      this.manufactureres = [...new Set(this.vehicleModels.map(x => x.manufacturer))];
      this.carModels = new Array<string>(this.vehicleModels.length);
    })
  }

  modo() {
    for (var i = 0; i < this.vehicleModels.length; i++) {
      if (this.vehicleModels[i].manufacturer == this.chosenMod) {
        this.carModels.push(this.vehicleModels[i].model);
      }
    }
    this.carModels = this.carModels.filter(x => x != null) as string[];
  }

  getEstimations() {
    this.vehicle.manufacturer = this.chosenMod;
    this.vehicle.model = this.chosenCar;
    this.vehicle.purchaseDate = this.purchaseDate;
    sessionStorage.setItem('manufacturer', this.vehicle.manufacturer);
    sessionStorage.setItem('model', this.vehicle.model);
    sessionStorage.setItem('purchaseDate', this.vehicle.purchaseDate);
    this.insuranceService.fetchPremiums(this.vehicle).subscribe(response => {
      this.estimate = response;
      sessionStorage.setItem('estimate', JSON.stringify(this.estimate));
      this.router.navigate(['/show-plans']);
    })
  }

}
