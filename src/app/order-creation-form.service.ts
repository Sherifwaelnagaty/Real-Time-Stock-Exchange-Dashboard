import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderCreationFormService {
  private orders: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private stockOptions: string[] = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA'];

  constructor() {}

  getOrders() {
    return this.orders.asObservable();
  }
  getStockOptions() {
    return this.stockOptions;
  }
  addOrder(order: any) {
    const currentOrders = this.orders.getValue();
    this.orders.next([...currentOrders, order]);
  }
}

