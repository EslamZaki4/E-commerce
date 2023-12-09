import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackOrdersComponent } from './track-orders/track-orders.component';
import { CartComponent } from './cart/cart.component';
import { ROUTES, RouterModule, Routes } from '@angular/router';
const routes:Routes = [
{path: 'usercart', component:CartComponent ,title:'user Cart Page'},
{path: 'trackorder', component:TrackOrdersComponent ,title:'track order Page'},

]


@NgModule({
  declarations: [
    TrackOrdersComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
RouterModule.forChild(routes),
  ]
})
export class OrdersModule { }
