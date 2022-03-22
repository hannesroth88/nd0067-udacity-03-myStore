import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"]
})
export class CartItemComponent implements OnInit {
  @Output() qtyChangeEvent = new EventEmitter()
  @Input() cartItem: CartItem = {
    product: {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0
      }
    },
    qty: 0
  }

  constructor() {}

  ngOnInit(): void {}
}
