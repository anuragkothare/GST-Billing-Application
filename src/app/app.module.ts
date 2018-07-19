import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routingModule} from '../app/app-routing'

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
