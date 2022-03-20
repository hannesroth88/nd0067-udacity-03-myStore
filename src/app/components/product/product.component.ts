import { Component, Input, OnInit } from "@angular/core"
import { CardService } from "src/app/services/card.service"

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
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
  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  addToCardComponent(product: Product) {
    const cardItem: CardItem = { product: product, qty: this.selectedValue }
    this.cardService.addToCard(cardItem)
    window.alert(`Product: ${product.title} added to card`)
  }
}
