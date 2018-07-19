
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ModuleWithProviders } from "@angular/core";
import { ProductDetailComponent } from './product-detail/product-detail.component';



const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  // {path: '', redirectTo: '/products', pathMatch: 'full'},
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
