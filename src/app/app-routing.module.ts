import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CartComponent } from "./components/cart/cart.component"
import { ProductComponent } from "./components/product/product.component"
import { ProductsComponent } from "./components/products/products.component"
import { CartOrderCreatedComponent } from "./components/cart-order-created/cart-order-created.component"
import { CoinbaseComponent } from "./components/checkout/coinbase/coinbase.component"
import { SuccessComponent } from "./components/checkout/success/success.component"
import { CanceledComponent } from "./components/checkout/canceled/canceled.component"

const routes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "cart", component: CartComponent },
  { path: "order-created", component: CartOrderCreatedComponent },
  { path: "checkout/coinbase", component: CoinbaseComponent },
  { path: "checkout/success/:id", component: SuccessComponent },
  { path: "checkout/canceled/:id", component: CanceledComponent },
  { path: "product/:id", component: ProductComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
