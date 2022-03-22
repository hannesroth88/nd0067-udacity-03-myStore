import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { CartService } from "src/app/services/cart.service"

@Component({
  selector: "app-card-user",
  templateUrl: "./card-user.component.html",
  styleUrls: ["./card-user.component.css"]
})
export class CardUserComponent implements OnInit {
  fullName: string = ""
  address: string = ""
  creditCard: string = ""
  creditCardInfo : string =""
  constructor(private router:Router, private cartService:CartService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.creditCard.length == 16 && !isNaN(parseInt(this.creditCard))){
      this.creditCardInfo = ""
      // this.cartService.createOrder() TODO pass to parent component to get all input parameters needed
      this.router.navigate(['/order-created']);
    } else {
      this.creditCardInfo = "invalid credit card number"
    }
  }
}
