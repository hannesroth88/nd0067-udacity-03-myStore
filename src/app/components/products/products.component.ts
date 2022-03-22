import { Component, OnInit } from "@angular/core"
import { ProductsService } from "src/app/services/products.service"
import { delay, retryWhen, take } from "rxjs"

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  productList: Product[] = []
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().pipe(retryWhen(errors => errors.pipe(delay(1000), take(100)))).subscribe((data) => (this.productList = data))
  }
}
