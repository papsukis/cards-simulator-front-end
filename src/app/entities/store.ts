import { CardEntity } from './card';

export class Store {

    cardToDecklist : CardEntity;
    trackIds = [];

    constructor() {
        this.trackIds.push('cardsDiv');
        this.trackIds.push('main_deck');
        this.trackIds.push('side_deck');
        this.trackIds.push('extra_deck');
    }

}