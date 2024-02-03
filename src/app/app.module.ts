import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { OrderCreationFormComponent } from './order-creation-form/order-creation-form.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainComponent,
    HeaderComponent,
    TopWidgetsComponent,
    OrderCreationFormComponent,
    StockDashboardComponent,
    OrdersHistoryComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
