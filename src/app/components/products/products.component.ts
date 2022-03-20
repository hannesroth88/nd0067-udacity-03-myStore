import { Component, OnInit } from "@angular/core"
import { ProductsService } from "src/app/services/products.service"
import { CardService } from "src/app/services/card.service"

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  productList: Product[] = []
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => (this.productList = data))
  }
}
