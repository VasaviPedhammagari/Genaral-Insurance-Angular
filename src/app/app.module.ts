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
<<<<<<< HEAD
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
=======
import { InsurancePlanComponent } from './insurance-plan/insurance-plan.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
>>>>>>> 9a24f3f4d0411c9b04aebfe160caadcbf1f9402d

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    InsurancePlanComponent,
    PaymentComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
<<<<<<< HEAD
    HomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent
=======
    LoginComponent,
    PaymentSummaryComponent
>>>>>>> 9a24f3f4d0411c9b04aebfe160caadcbf1f9402d
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
