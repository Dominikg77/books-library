import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DominikAtHomeComponent } from './dominik-at-home/dominik-at-home.component';
import { InfoComponent } from './info/info.component';
import { OrderComponent } from './order/order.component';
import { SandroAtHomeComponent } from './sandro-at-home/sandro-at-home.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order', component: OrderComponent },
  { path: 'dominik', component: DominikAtHomeComponent },
  { path: 'sandro', component: SandroAtHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
