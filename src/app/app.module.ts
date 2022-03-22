import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { ProductsComponent } from "./components/products/products.component"
import { HttpClientModule } from '@angular/common/http'; 
import { NavigationComponent } from "./components/navigation/navigation.component"
import { CartComponent } from "./components/cart/cart.component"
import { ProductSimpleComponent } from "./components/product-simple/product-simple.component"
import { ProductComponent } from "./components/product/product.component"
import { FormsModule } from "@angular/forms"
import { CartItemComponent } from "./components/cart-item/cart-item.component"
import { CartOrderCreatedComponent } from "./components/cart-order-created/cart-order-created.component"
import { ActivatedRoute, RouterModule } from "@angular/router"

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavigationComponent,
    ProductSimpleComponent,
    ProductComponent,
    CartComponent,
    CartItemComponent,
    CartOrderCreatedComponent
  ],
  imports: [ActivatedRoute, BrowserModule, HttpClientModule, AppRoutingModule, NgbModule, FormsModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
