import { Component, Input, OnInit } from "@angular/core"
import { CartService } from "src/app/services/cart.service"

@Component({
  selector: "app-product",
  templateUrl: "./product-simple.component.html",
  styleUrls: ["./product-simple.component.css"]
})
export class ProductSimpleComponent implements OnInit {
  @Input() product: Product = {
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
  }

  qtyDropdownElements: number[] = Array.from({ length: 10 }, (_, i) => i + 1)
  selectedValue: number = 1
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCartComponent(product: Product) {
    const cartItem: CartItem = { product: product, qty: this.selectedValue }
    try {
      this.cartService.addToCart(cartItem)
      window.alert(`Product: ${product.title} added to cart`)
    } catch (error) {
      window.alert(error)
    }
  }
}
