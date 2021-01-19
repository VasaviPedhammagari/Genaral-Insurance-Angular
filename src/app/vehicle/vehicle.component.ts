import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from '../appmodel/vehicle';
import { InsuranceService } from '../insurance.service';
import { VehicleModel } from '../appmodel/vehicleModel';
import { User } from '../appmodel/user';
import { Estimate } from '../appmodel/estimate';
import { MotorInsurance } from '../appmodel/motorInsurance';
import { Payment } from '../appmodel/payment';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  VehicleForm: FormGroup;
  vehicle: Vehicle = new Vehicle();
  type: string[] = ['2-Wheeler', '4-Wheeler'];
  message: string;
  uname: string;
  uid: string;

  vehicleModels: VehicleModel[];
  manufactureres: string[];
  estimate: Estimate[];
  carModels: Array<string>;
  chosenMod: string = "";
  chosenCar: string = "";
  models: string = "";
  cars: string = "";
  checkDiv: boolean = false;
  motorInsurance: MotorInsurance = new MotorInsurance();
  user: User = new User();

  price: number = 0;
  payment: Payment;

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService, private router: Router) {
  }

  public ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userDetails') || '{}');
    console.log(this.user);
    this.insuranceService.fetchVehicleModels().subscribe(response => {
      this.vehicleModels = response;
      this.manufactureres = [...new Set(this.vehicleModels.map(x => x.manufacturer))];
      this.carModels = new Array<string>(this.vehicleModels.length);
    })
    if (sessionStorage['manufacturer']) {
      this.checkDiv = true;
    }
    this.vehicle.manufacturer = sessionStorage.getItem('manufacturer') || '';
    this.vehicle.model = sessionStorage.getItem('model') || '';
    this.vehicle.purchaseDate = sessionStorage.getItem('purchaseDate') || '';
    this.VehicleForm = this.fb.group({
      vehicleType: ["", Validators.required],
      models: ["", Validators.required],
      cars: ["", Validators.required],
      manufacturer: ["", Validators.required],
      model: ["", Validators.required],
      license: ["", Validators.required],
      purchaseDate: ["", Validators.required],
      regNo: ["", Validators.compose([Validators.required, Validators.pattern(/^[A-Z]{2}([ \-])[0-9]{2}[ ,][A-Z0-9]{1,2}[A-Z]\1[0-9]{4}$/)])],
      engineno: ["", Validators.compose([Validators.required, Validators.pattern('/^([A-z]{2}[A-z0-9]{5,16})$/')])],
      chassisno: ["", Validators.compose([Validators.required, Validators.pattern('/^[A-z]{17}$/')])]
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
  saveVehicle() {
    if(!this.checkDiv){
      this.vehicle.manufacturer = this.chosenMod;
      this.vehicle.model = this.chosenCar;
    }
    console.log(JSON.stringify(this.vehicle));
    this.vehicle.user = this.user;
    console.log(JSON.stringify(this.vehicle));
    this.insuranceService.fetchPremiums(this.vehicle).subscribe(response => {
      this.estimate = response;
      sessionStorage.setItem('estimateBuyInsurance', JSON.stringify(this.estimate));
    })
    this.insuranceService.registerVehicle(this.vehicle).subscribe(response => {
      console.log(JSON.stringify(response));
      console.log(this.vehicle.vehicleType);
      if (response.status == 'SUCCESS') {
        this.vehicle = response.vehicle;
        sessionStorage.setItem('vehicle', JSON.stringify(this.vehicle));
        this.price = parseInt(sessionStorage.getItem('price') || '{}');
        if (this.price > 0) {
          this.motorInsurance.vehicle = this.vehicle;
          this.motorInsurance.user = this.user;
          this.motorInsurance.planType = sessionStorage.getItem('type') || '';
          this.motorInsurance.noOfYrs = parseInt(sessionStorage.getItem('noOfYears') || '');
          sessionStorage.setItem('motorInsurance', JSON.stringify(this.motorInsurance));
          this.insuranceService.choosePlan(this.motorInsurance).subscribe(response => {
            console.log(JSON.stringify(response));
            if (response.status == 'SUCCESS') {
              this.payment = response.payment;
              console.log(JSON.stringify(this.payment));
              sessionStorage.setItem('payment', JSON.stringify(this.payment));
              this.router.navigate(['payment']);
            } else
              alert(response.message);
          })
          // this.router.navigate(['payment']);
        }
        else {
          this.router.navigate(['choose-plan']);
        }
      }
      else
        alert(response.message);
    })
  }
}
