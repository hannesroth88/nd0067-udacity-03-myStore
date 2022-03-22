import { Component, OnInit } from "@angular/core"
import { CartService } from "src/app/services/cart.service"

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []
  totalPrice:number = 0
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
    this.updateTotalPrice()
  }

  updateTotalPrice(){
    this.totalPrice = this.cartService.calculateTotalPrice()
  }
}
