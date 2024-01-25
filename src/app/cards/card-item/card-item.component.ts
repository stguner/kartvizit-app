import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {

  @Input() cardItem!: Card;

  constructor(
    private dialog: MatDialog
  ) { }

  openUpdateCardModal(card: Card):void {
    this.dialog.open(CardModalComponent,{
      width: '500px',
      data: this.cardItem
    });
  }

}
