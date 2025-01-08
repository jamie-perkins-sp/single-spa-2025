import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { EntitlementsComponent } from './entitlements.component';

@NgModule({
  declarations: [EntitlementsComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'landing-page',
        pathMatch: 'full'
      },
      {
        path: 'landing-page',
        component: EntitlementsComponent,
        children: [
          {
            path: 'detail/:id',
            component: DetailComponent
          }
        ]
      }
    ])
  ]
})
export class EntitlementsModule { }
