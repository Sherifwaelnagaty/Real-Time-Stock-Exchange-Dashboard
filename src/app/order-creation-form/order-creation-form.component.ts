import { Component, OnInit } from '@angular/core';
import { OrderCreationFormService } from '../order-creation-form.service';

@Component({
  selector: 'app-order-creation-form',
  templateUrl: './order-creation-form.component.html',
  styleUrl: './order-creation-form.component.css'
})
export class OrderCreationFormComponent implements OnInit{
  order = {
    stockName: '',
    quantity: 0,
    price: 0,
  };
  stockOptions: string[] = [];
  constructor(private OrderCreationForm: OrderCreationFormService) {}

  ngOnInit(): void {
    this.stockOptions = this.OrderCreationForm.getStockOptions();
  }

  submitOrder() {
    this.OrderCreationForm.addOrder(this.order);
    this.order = {
      stockName: '',
      quantity: 0,
      price: 0
    };
  }
}
