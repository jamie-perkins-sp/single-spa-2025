import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entitlements',
  templateUrl: './entitlements.component.html',
  styleUrl: './entitlements.component.scss'
})
export class EntitlementsComponent {

  constructor(private router: Router) {}
  
  gotoDetail(): void {
    this.router.navigate([
      'admin/access/entitlements',
      'landing-page', 
      'detail',
      '123'
    ]);
  }

}
