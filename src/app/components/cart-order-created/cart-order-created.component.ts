import { Component, OnInit } from "@angular/core"
import { CartService } from "src/app/services/cart.service"

@Component({
  selector: "app-cart-order-created",
  templateUrl: "./cart-order-created.component.html",
  styleUrls: ["./cart-order-created.component.css"]
})
export class CartOrderCreatedComponent implements OnInit {
  order: Order = {
    cart: [],
    user: { fullName: "", address: "", creditCard: "" },
    totalPrice: 0,
    id: ""
  }
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.order = this.cartService.getOrder()
  }
}
