import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CardEntity } from 'src/app/entities/card';
import { DecklistEntity } from '../../entities/DecklistEntity';
import { MainDeckEntity } from 'src/app/entities/MainDeckEntity';
import { ExtraDeckEntity } from 'src/app/entities/ExtraDeckEntity';
import { SideDeckEntity } from 'src/app/entities/SideDeckEntity';
import { DomSanitizer } from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { Constants } from 'src/app/consts/const';

@Component({
  selector: 'decklist',
  templateUrl: './decklist.component.html',
  styleUrls: ['./decklist.component.scss']
})
export class DecklistComponent implements OnInit {
  
  decklist : DecklistEntity = new DecklistEntity();
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
    this.data.storeSubj.unsubscribe();
  }

  onTalkDrop(event: CdkDragDrop<CardEntity[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given photo to the target data array. This happens if
    // a photo has been dropped on a different container.
  
    //fire event names dragdrop so that the document can listen to it
    // documenet will listen to this event from the app.component.ts
    // where there is hostlistner for all events that can reset the timer
    const ev = new Event('dragdrop');
    document.dispatchEvent(ev);
    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    }else if( (this.isExtraDeckCard(event.previousContainer.data[event.previousIndex])) && 
              (event.container.element.nativeElement.id === "extra_deck" || 
               event.container.element.nativeElement.id === "side_deck" ) && 
               this.validateDeckList(event.container.element.nativeElement.id)){     

          copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
          );
          
          this.addToDecklist();

    }else if(!(this.isExtraDeckCard(event.previousContainer.data[event.previousIndex])) && 
              (event.container.element.nativeElement.id != "extra_deck") &&
              this.validateDeckList(event.container.element.nativeElement.id) ){  

              copyArrayItem(
              event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex
          );

          this.addToDecklist();
        }

    }
  
  

  addToDecklist() {
    this.data.setCurrentDecklist(this.decklist);
  }
  validateDeckList(zone : string):boolean{
    if(this.decklist.mainDeckSize()>=60 && zone==='main_deck')
    {
      return false;
    }
    if(this.decklist.sideDeckSize()>=15 && zone==='side_deck')
    {
      return false;
    }
    if(this.decklist.extraDeckSize()>=15 && zone==='extra_deck')
    {
      return false;
    }
    return true;
  }
  isExtraDeckCard(card: CardEntity){
    for(let t of Constants.ExtraDeckType){
      if(card.type.includes(t.name))
      return true;
      }
      return false;
  }
}
