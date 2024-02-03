import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    // Subscribe to the router events to update the class based on the route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateMainClass();
    });
  }

  isDashboardRoute(): boolean {
    // Implement logic to check if the current route is the dashboard route
    return this.router.url.includes('/Dashboard');
  }

  isOrdersRoute(): boolean {
    // Implement logic to check if the current route is the orders route
    return this.router.url.includes('/orders');
  }

  updateMainClass(): void {
    // Update the main class whenever the route changes
    // You can add more conditions based on your routes
    if (this.isDashboardRoute()) {
      document.body.classList.remove('app-main');
      document.body.classList.add('app-dashboard');
    } else if (this.isOrdersRoute()) {
      document.body.classList.remove('app-dashboard');
      document.body.classList.add('app-main');
    }
  }
}
