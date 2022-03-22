import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { CartService } from "src/app/services/cart.service"

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: CartItem[] = []
  totalPrice: number = 0
  user: User = {
    fullName: "",
    address: "",
    creditCard: ""
  }
  creditCardInfo: string = ""
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
    this.updateTotalPrice()
  }

  updateTotalPrice() {
    this.totalPrice = this.cartService.calculateTotalPrice()
  }

  onSubmit(): void {
    if (this.user.creditCard.length == 16 && !isNaN(parseInt(this.user.creditCard))) {
      this.creditCardInfo = ""
      this.cartService.createOrder(this.cart, this.user, this.totalPrice)
      this.router.navigate(["/order-created"])
    } else {
      this.creditCardInfo = "invalid credit card number"
    }
  }
}
