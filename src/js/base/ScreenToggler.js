import { getElement } from '../functions/functions';

const SCREEN_START = 'START';
const SCREEN_GAME = 'GAME';
const SCREEN_SHOP = 'SHOP';
const SCREEN_RESULT = 'RESULT';

export class ScreenToggler {
    constructor() {
        this._showScreen = (screen) => {
            const START = getElement('#js-start-screen');
            const GAME = getElement('#js-game-screen');
            const SHOP = getElement('#js-shop-screen');
            const RESULT = getElement('#js-result-screen');
    
            switch (screen) {
                case 'START':
                    START.classList.remove('hidden');
                    GAME.classList.add('hidden');
                    RESULT.classList.add('hidden');
                    SHOP.classList.add('hidden');
                    break;
                case 'GAME':
                    START.classList.add('hidden');
                    GAME.classList.remove('hidden');
                    RESULT.classList.add('hidden');
                    SHOP.classList.add('hidden');
                    break;
                case 'SHOP':
                    START.classList.add('hidden');
                    GAME.classList.add('hidden');
                    RESULT.classList.add('hidden');
                    SHOP.classList.remove('hidden');
                    break;
                case 'RESULT':
                    START.classList.add('hidden');
                    GAME.classList.add('hidden');
                    RESULT.classList.remove('hidden');
                    SHOP.classList.add('hidden');
                    break;
            }
        }

        this.showScreen = {
            start: () => this._showScreen(SCREEN_START),
            game: () => this._showScreen(SCREEN_GAME),
            shop: () => this._showScreen(SCREEN_SHOP),
            result: () => this._showScreen(SCREEN_RESULT),
        };
    }

}
