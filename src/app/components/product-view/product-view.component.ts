import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product:Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  }

  qtyDropdownElements: number[] = Array.from({ length: 10 }, (_, i) => i + 1)
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.product = history.state.product
  }

  addToCardComponent(product: Product, qty: number) {
    const cardItem: CardItem = { product: product, qty: qty }
    this.cardService.addToCard(cardItem)
    window.alert(`Product: ${product.title} added to card`)
  }
}
