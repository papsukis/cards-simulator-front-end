import { Component, OnInit, Input } from '@angular/core';
import { CardEntity } from '../../entities/card';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card : CardEntity;

  constructor(private dataService : DataService ) { }

  ngOnInit() {
  }

}
