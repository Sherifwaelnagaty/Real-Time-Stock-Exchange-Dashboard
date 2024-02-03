import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';

const routes: Routes = [
  {},
  {path:'Dashboard',component:StockDashboardComponent},
  {path:'Orders',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
