import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { CartService } from "src/app/services/cart.service"
import { ProductsService } from "src/app/services/products.service"

@Component({
  selector: "app-product-view",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product: Product = {
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
  constructor(private route: ActivatedRoute, private cartService: CartService, private productsService: ProductsService) {}

  ngOnInit(): void {
    console.log(this.route)
    this.route.params.subscribe((params) => {
      this.productsService.getProductById(params["id"]).subscribe((data) => (this.product = data))
    })
  }

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

          this.product=history.state;