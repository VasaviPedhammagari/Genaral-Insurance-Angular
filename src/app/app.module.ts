import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RecaptchaModule } from "ng-recaptcha";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

 
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PremiumCalulatorComponent } from './premium-calulator/premium-calulator.component';
import { ShowPlansComponent } from './show-plans/show-plans.component';
import { InsurancePlanComponent } from './insurance-plan/insurance-plan.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { ClaimComponent } from './claim/claim.component';
import { ValidateClaimComponent } from './validate-claim/validate-claim.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { LoginProfileComponent } from './login-profile/login-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';

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
    HomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    LoginComponent,
    PaymentSummaryComponent,
    RenewInsuranceComponent,
    ClaimComponent,
    AddVehicleComponent,
    LoginProfileComponent,
    ValidateClaimComponent,
    AddVehicleComponent,
    LogoutComponent,
    UpdateProfileComponent,
    FooterComponent,
    UserDetailsComponent,
    AboutUsComponent,
    AdminLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
