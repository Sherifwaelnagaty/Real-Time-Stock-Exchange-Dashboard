import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Orders',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
