import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';

@Component({
  selector: 'ng-home-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.resetConfig([...routes, ...this.router.config]);
  }
}
