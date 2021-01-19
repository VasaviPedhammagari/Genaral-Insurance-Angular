import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PremiumCalulatorComponent } from './premium-calulator/premium-calulator.component';
import { ShowPlansComponent } from './show-plans/show-plans.component';
import { InsurancePlanComponent } from './insurance-plan/insurance-plan.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { ClaimComponent } from './claim/claim.component';
import { ValidateClaimComponent } from './validate-claim/validate-claim.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { LoginProfileComponent } from './login-profile/login-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'vehicle-registration', component: VehicleComponent },
  {path: 'choose-plan', component: InsurancePlanComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'claim', component:ClaimComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'admindash', component: AdminDashboardComponent },
  { path: 'payment-summary', component: PaymentSummaryComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'premium-calculate', component: PremiumCalulatorComponent },
  { path: 'show-plans', component: ShowPlansComponent },
  { path: 'renew-insurance', component: RenewInsuranceComponent },
  { path: 'validate', component: ValidateClaimComponent },
  { path: 'renew-insurance', component: RenewInsuranceComponent},
  { path: 'addVehicle', component: AddVehicleComponent},
  { path: 'login-profile', component: LoginProfileComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'userdetails', component: UserDetailsComponent},
  { path: 'update', component: UpdateProfileComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'adminLogout', component: AdminLogoutComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, VehicleComponent, LoginComponent, InsurancePlanComponent, PaymentComponent,
                                    ResetPasswordComponent, ForgotPasswordComponent, PaymentSummaryComponent, AdminLoginComponent,
                                     AdminDashboardComponent, RenewInsuranceComponent, ClaimComponent, LoginProfileComponent, UserDetailsComponent]
