import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomFormsModule } from 'ng2-validation';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RecaptchaModule } from "ng-recaptcha";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

 
import { HomeComponent } from './home/home.component';
import { PremiumCalulatorComponent } from './premium-calulator/premium-calulator.component';
import { ShowPlansComponent } from './show-plans/show-plans.component';
import { InsurancePlanComponent } from './insurance-plan/insurance-plan.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    PremiumCalulatorComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    HomeComponent,
    ShowPlansComponent,
    InsurancePlanComponent,
    PaymentComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    LoginComponent,
    PaymentSummaryComponent,
    RenewInsuranceComponent
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
