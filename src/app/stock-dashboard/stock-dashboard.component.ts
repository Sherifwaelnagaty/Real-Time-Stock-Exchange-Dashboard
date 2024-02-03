import { Component,OnInit} from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrl: './stock-dashboard.component.css'
})
export class StockDashboardComponent implements OnInit{
  stockData: any;
  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.fetchStockData();
  }

  fetchStockData() {
    this.stockService.getStockData().subscribe((data) => {
      this.stockData = data;
    });
  }
}
