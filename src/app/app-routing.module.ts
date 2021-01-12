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
import { InsurancePlanComponent } from './insurance-plan/insurance-plan.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'vehicle-registration', component: VehicleComponent },
  {path: 'choose-plan', component: InsurancePlanComponent},
  {path: 'payment', component: PaymentComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'admindash', component: AdminDashboardComponent },
  { path: 'payment-summary', component: PaymentSummaryComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, VehicleComponent, LoginComponent, InsurancePlanComponent, PaymentComponent,
                                    ResetPasswordComponent, ForgotPasswordComponent, PaymentSummaryComponent, AdminLoginComponent, AdminDashboardComponent]
