import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog : MatDialog) { }

  openDialog(dialogToOpen : any,data : any,cssClass ?:any){
    this.dialog.open(dialogToOpen, {
      panelClass: cssClass,
      data: data
    })
  }
}
