import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  qtyDropdownElements: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  constructor(
    private productService: ProductsService,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((data) => (this.productList = data));
  }

  addToCardComponent(product: Product, qty: number) {
    const cardItem: CardItem = { product: product, qty: qty };
    this.cardService.addToCard(cardItem)
    window.alert(`Product: ${product.title} added to card`);
  }
}
