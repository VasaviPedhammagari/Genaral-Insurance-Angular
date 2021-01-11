import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Address } from '../appmodel/address';
import { User } from '../appmodel/user';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegForm:FormGroup;
  user:User = new User();
  address:Address = new Address();

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService) {
   }

  public ngOnInit(): void {
    this.RegForm = this.fb.group({
      username: ["",Validators.required],
      email: ["",Validators.compose([Validators.required, CustomValidators.email])],
      dateOfBirth: ["",Validators.required],
      phoneno: ["",Validators.compose([Validators.required, Validators.pattern(/^\d{10}$/)])],
      street: ["",Validators.required],
      city: ["",Validators.required],
      state: ["",Validators.required],
      pincode: ["",Validators.compose([Validators.required,Validators.pattern(/^\d{6}$/)])],
      password1: ["",Validators.compose([
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
         ])
      ],
      password2: ["",Validators.required]
  });
  }

  register(){
    //console.log("Register function works!");
<<<<<<< HEAD
    if(this.user.password == this.password2){
      console.log(this.password2);
      alert(JSON.stringify(this.user));
=======
    if(this.user.password == this.user.password2){
      //alert(JSON.stringify(this.user));
      this.user.address = this.address;
>>>>>>> 6cc1d1a674f43fa247873bca3872fcf9fd52e7ce
      this.insuranceService.registerUser(this.user).subscribe(response => {
        alert(JSON.stringify(response));
    })
    }
    else{
      alert("Password mismatch!");
    }
  } 
}
export class Address{
  addressId:number;
	addressLine:string;
	city:string;
	pin:number;
	state:number;
}