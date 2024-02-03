// src/app/stock.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiKey = 'YOUR_API_KEY';
  private baseUrl = 'https://www.alphavantage.co/query';
  private symbol = 'AAPL'; // Initial stock symbol

  constructor(private http: HttpClient) {}

  getStockData(): Observable<any> {
    const apiUrl = `${this.baseUrl}?function=GLOBAL_QUOTE&symbol=${this.symbol}&apikey=${this.apiKey}`;

    // Fetch stock data every 5 seconds
    return interval(5000).pipe(
      switchMap(() => this.http.get(apiUrl)),
      map((response: any) => response['Global Quote'])
    );
  }
}
