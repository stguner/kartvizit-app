import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {

  cards!: Card[];
  constructor(
    public dialog: MatDialog,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.getCards();
  }

  openCardModal() {
    const dialog = this.dialog.open(CardModalComponent,{width: '500px'});
    dialog.afterClosed().subscribe( res => {
      if(res) {
        this.getCards();
      }
    } );
  }
  
  getCards() {
    this.cardService.getCards().subscribe( (res: Card[]) => {this.cards = res;} )
  }
  

}
