import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cardItems:CardItem[] = []
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardItems = this.cardService.getCard()}
}
