import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { CartService } from "src/app/services/cart.service"
import { PaymentService } from "src/app/services/payment.service"

@Component({
  selector: "app-coinbase",
  templateUrl: "./coinbase.component.html",
  styleUrls: ["./coinbase.component.css"]
})
export class CoinbaseComponent implements OnInit {
  order: Order = {
    id: "",
    cart: [],
    user: { fullName: "", address: "", creditCard: "" },
    totalPrice: 0
  }
  constructor(private cartService: CartService, private readonly paymentService: PaymentService, private readonly router:Router) {}

  ngOnInit(): void {
    this.order = this.cartService.getOrder()
  }

  btnPay() {
    this.paymentService
      .payWithCoinbase(this.order)
      .pipe()
      .subscribe((data) => {
        console.log(data.data.hosted_url);
        window.location.href = data.data.hosted_url
      })
  }
}
