import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent {
cardForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.cardForm = this.fb.group({
      name: [ this.data?.name || '',Validators.maxLength(50)],
      title: [this.data?.title ||'',[Validators.required,Validators.maxLength(255)]],
      email: [this.data?.email || '',[Validators.email, Validators.maxLength(255)]],
      address: [this.data?.address ||'',Validators.maxLength(255)],
      phone: [this.data?.phone ||'',[Validators.required,Validators.maxLength(20)]],
    });
  }


  addCard():void {
    console.log(this.cardForm.value);
    this.cardService.addCard(this.cardForm.value).subscribe( (res: Card) => { 
      console.log(res); 
      this.openSnackBar( res.toString() || 'Kartvizit başarıyla eklendi.' ,'Close');
    });
    
    this.dialogRef.close(true);
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  updateCard():void {
    this.cardService.updateCard(this.cardForm.value, this.data.id).subscribe( (res: Card) => { 
      console.log(res); 
      this.openSnackBar( res.toString() || 'Kartvizit başarıyla güncellendi.' ,'Close');
    });
    this.dialogRef.close(true);
  }

  deleteCard():void {
    this.cardService.deleteCard(this.data.id).subscribe( (res: Card) => { 
      console.log(res); 
      this.openSnackBar( res.toString() || 'Kartvizit başarıyla silindi.' ,'Close');
    });
    this.dialogRef.close(true);
  }

}
