import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DominikAtHomeComponent } from './dominik-at-home/dominik-at-home.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { SandroAtHomeComponent } from './sandro-at-home/sandro-at-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['/user']);

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'login', component: LoginComponent, ...canActivate(redirectToHome) },
  {
    path: 'login/sign-up',
    component: SignUpComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    ...canActivate(redirectToLogin),
  },
  { path: 'order', component: OrderComponent, ...canActivate(redirectToLogin) },
  {
    path: 'dominik',
    component: DominikAtHomeComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'sandro',
    component: SandroAtHomeComponent,
    ...canActivate(redirectToLogin),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
