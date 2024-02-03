import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private stockOptions: string[] = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA'];

  chart = new Chart({
    chart: {
      type: 'line',
      height: 625
    },
    title: {
      text: 'Real-time Stock Information'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: this.stockOptions[0],
        type: "line",
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: this.stockOptions[1],
        type: "line",
        data: [20, 29, 35, 45, 52, 61, 75, 80, 70, 65, 50, 60]
      },
      {
        name: this.stockOptions[2],
        type: "line",
        data: [40, 49, 60, 80, 100, 120, 140, 150, 130, 100, 80, 90]
      },
      {
        name: this.stockOptions[3],
        type: "line",
        data: [60, 69, 75, 85, 92, 101, 115, 120, 110, 105, 90, 100]
      },
      {
        name: this.stockOptions[4],
        type: "line",
        data: [80, 89, 95, 105, 112, 121, 135, 140, 130, 125, 110, 120]
      }
    ],
    credits: {
      enabled: false
    }
  });
}
