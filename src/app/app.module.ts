import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import "reflect-metadata";
import "es6-shim";
import {NgxPaginationModule} from 'ngx-pagination';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HttpClientModule } from '@angular/common/http'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { CardsComponent } from './components/cards/cards.component';
import { CardFilterComponent } from './components/card-filter/card-filter.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import { DecklistComponent } from './components/decklist/decklist.component';
import { ContainerComponent } from './components/container/container.component';
import { DataService } from './services/data.service';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    CardFilterComponent,
    SearchPipe,
    DecklistComponent,
    ContainerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    DragDropModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
