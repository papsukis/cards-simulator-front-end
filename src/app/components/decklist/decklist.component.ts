import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CardEntity } from 'src/app/entities/card';
import { DecklistEntity } from '../../entities/DecklistEntity';
import { MainDeckEntity } from 'src/app/entities/MainDeckEntity';
import { ExtraDeckEntity } from 'src/app/entities/ExtraDeckEntity';
import { SideDeckEntity } from 'src/app/entities/SideDeckEntity';
import { DomSanitizer } from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'decklist',
  templateUrl: './decklist.component.html',
  styleUrls: ['./decklist.component.scss']
})
export class DecklistComponent implements OnInit {
  
  decklist : DecklistEntity;
  mainDeck : MainDeckEntity = new MainDeckEntity();
  extraDeck : ExtraDeckEntity = new ExtraDeckEntity();
  sideDeck : SideDeckEntity = new SideDeckEntity();
  trackIds = [];  

  constructor(private data: DataService,
              ) {}

  ngOnInit() {

    this.init();

  }
  init(){
      this.data.storeSubj.subscribe(store=>{
        this.trackIds=store.trackIds;
      })


  }

  ngOnDestroy(): void {

  }

  onTalkDrop(event: CdkDragDrop<CardEntity[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given photo to the target data array. This happens if
    // a photo has been dropped on a different container.
  
    //fire event names dragdrop so that the document can listen to it
    // documenet will listen to this event from the app.component.ts
    // where there is hostlistner for all events that can reset the timer
    console.log(event.previousContainer.data)
    console.log(event.container.data)
    const ev = new Event('dragdrop');
    document.dispatchEvent(ev);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
     
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  
  }
}
