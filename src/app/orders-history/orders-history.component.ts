import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrl: './orders-history.component.css'
})
export class OrdersHistoryComponent {
transactions=[
  {
    symbol:'Apple',
    quantity:5,
    ordertype:11000,
  },{
    symbol:'Apple',
    quantity:5,
    ordertype:11000,
  }
];
}
