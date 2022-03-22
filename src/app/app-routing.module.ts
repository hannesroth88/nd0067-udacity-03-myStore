import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { CartOrderCreatedComponent } from './components/cart-order-created/cart-order-created.component';

const routes: Routes = [
  {path:"", component:ProductsComponent},
  {path:"cart", component:CartComponent},
  {path:"order-created", component:CartOrderCreatedComponent},
  {path:"product/:id", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
