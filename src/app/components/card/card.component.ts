import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CardEntity } from '../../entities/card';
import { DataService } from 'src/app/services/data.service';
import { DialogService } from 'src/app/services/dialog.service';
import { CardDetailsComponent } from '../card-details/card-details.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {

  @Input() card : CardEntity;

  constructor(private dataService : DataService,
            private dialog : DialogService ) { }

  ngOnInit() {

  }

  getBanlistInfo(){
    if(this.card.banlist_info==null)
    return null
    if(this.card.banlist_info.ban_tcg === "Banned")
    return 0;
    if(this.card.banlist_info.ban_tcg === "Limited")
    return 1;
    if(this.card.banlist_info.ban_tcg === "Semi-Limited" )
    return 2;
  }

  showDetails(){
    this.dialog.openDialog(CardDetailsComponent,this.card,'no-padding')
  }
}
