import { CardEntity } from './card';
import { DecklistEntity } from './DecklistEntity';

export class Store {

    cardToDecklist : CardEntity;
    trackIds = [];
    currentDecklist : DecklistEntity = new DecklistEntity();

    constructor() {
        this.trackIds.push('cardsDiv');
        this.trackIds.push('main_deck');
        this.trackIds.push('side_deck');
        this.trackIds.push('extra_deck');
    }

}