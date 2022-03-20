import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  card: CardItem[] = [];

  constructor() { }
  
  addToCard(cardItem: CardItem): CardItem[] {
    this.card.push(cardItem);
    return this.card;
  }
  clearCard(): void {
    this.card = [];
  }
  getCard(): CardItem[] {
    return this.card;
  }
}
