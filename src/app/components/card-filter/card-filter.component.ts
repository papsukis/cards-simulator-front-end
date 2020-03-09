import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CardEntity } from '../../entities/card';
import { CardsService } from '../../services/cards.service';
import { CardDTO } from 'src/app/DTO/CardDTO';
import { Constants } from '../../consts/const'
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.scss']
})
export class CardFilterComponent implements OnInit {

  card: CardDTO = new CardDTO();
  cards: CardEntity[];
  types: boolean;

  message:string;

  monsterType = Constants.MonsterType;
  type = Constants.Type;
  extraMonsterType = Constants.ExtraDeckType;
  trapTypes = Constants.trapRace;
  spellTypes = Constants.spellRace;
  monsterRace = Constants.MonsterRace;
  monster: boolean;
  spell: boolean;
  trap: boolean;
  ALL: boolean;
  atribute = [
    'ALL',
    'DARK',
    'LIGHT',
    'EARTH',
    'FIRE',
    'WIND',
    'WATER',
    'DIVINE'
  ]


  submitted = false;
  
  constructor(
    private fb: FormBuilder,
    private cardService: CardsService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {

    
    this.submitted = true;
    this.cardService.search(this.card).subscribe((response) => {
      this.cards = response;
      //console.log(this.cards)   
    },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );

  }

  cardType(type: String) {
    if (type == "ALL") {
      this.ALL = true
      this.monster = false;
      this.trap = false;
      this.spell = false;
    }
    if (type == "Monster") {
      this.ALL = false;
      this.monster = true;
      this.trap = false;
      this.spell = false;
    }
    if (type == "Trap Card") {
      this.ALL = false;
      this.monster = false;
      this.trap = true;
      this.spell = false;
    }
    if (type == "Spell Card") {
      this.ALL = false;
      this.monster = false;
      this.trap = false;
      this.spell = true;
    }
  }

}
