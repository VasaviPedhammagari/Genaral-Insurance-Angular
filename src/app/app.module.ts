import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { CustomFormsModule } from 'ng2-validation';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RecaptchaModule } from "ng-recaptcha";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

 
import { HomeComponent } from './home/home.component';
import { PremiumCalulatorComponent } from './premium-calulator/premium-calulator.component';
import { ShowPlansComponent } from './show-plans/show-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyInsuranceComponent,
    routingComponents,
    HomeComponent,
    PremiumCalulatorComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    HomeComponent,
    ShowPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpClientModule,
    RecaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
