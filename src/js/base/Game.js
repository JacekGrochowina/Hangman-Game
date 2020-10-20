import { Common } from './Common';
import { Convicted } from './Convicted';
import { gameSound, loseSound, winSound } from './Sound';
import { storeTown, storeCemetery } from './Store';
import { boughtBoosters } from './BoughtBoosters';
import { shop } from './Shop';
import { steps } from './Steps';
import { dashboardToggler } from './DashboardToggler';
import { keyboard } from './Keyboard';
import { solution } from './Solution';
import { wallet } from './Wallet';
import { tabs } from './Tabs';
import {
    START_GAME_BTN,
    FINISH_GAME_BTN,
    OPEN_SHOP_BTN,
    CLOSE_SHOP_BTN,
    CLEAR_LOCAL_STORAGE_BTN,
    SOUND_TOGGLER_BTN,
    RESULT_INFO,
} from './elements';

export const RESULT = {
    WIN: 'WIN',
    LOSE: 'LOSE',
};

class Game extends Common {
    constructor() {
        super();

        this.convicted = null;
        this.mute = false;
    }

    init() {
        dashboardToggler.init();
        tabs.init();
        keyboard.init();
        shop.init();

        this._getDataLocalStorage();

        START_GAME_BTN.addEventListener('click', () => {
            this.showScreen.game();
            this._start();
            gameSound.play();
        });

        FINISH_GAME_BTN.addEventListener('click', () => {
            this.showScreen.start();
            winSound.stop();
            loseSound.stop();
        });

        OPEN_SHOP_BTN.addEventListener('click', () => {
            this.showScreen.shop();
        });

        CLOSE_SHOP_BTN.addEventListener('click', () => {
            this.showScreen.game();
        });

        CLEAR_LOCAL_STORAGE_BTN.addEventListener('click', () => {
            this.clearLocalStorage();
            window.location.reload();
        });

        SOUND_TOGGLER_BTN.addEventListener('click', () => {
            const muteTrueIcon = '<i class="btn__icon fas fa-volume-mute"></i>';
            const muteFalseIcon = '<i class="btn__icon fas fa-volume-up"></i>';

            this.mute = !this.mute;

            if (this.mute) {
                SOUND_TOGGLER_BTN.innerHTML = muteTrueIcon;
                gameSound.sound.volume = 0;
                loseSound.sound.volume = 0;
                winSound.sound.volume = 0;
            } else {
                SOUND_TOGGLER_BTN.innerHTML = muteFalseIcon;
                gameSound.sound.volume = 1;
                loseSound.sound.volume = 1;
                winSound.sound.volume = 1;
            }
        });
    }

    _start() {
        solution.init();
        this.convicted = new Convicted();
    }

    _getDataLocalStorage() {
        wallet.getLocalStorage();
        storeTown.getLocalStorage();
        storeCemetery.getLocalStorage();
        boughtBoosters.getLocalStorage();
    }

    _showResultInfo(result) {
        switch (result) {
            case 'WIN':
                this.injectToDOM(RESULT_INFO, 'Wygrałeś');
                break;
            case 'LOSE':
                this.injectToDOM(RESULT_INFO, 'Przegrałeś');
                break;
        }
    }

    finishGame(result) {
        this.showScreen.result();
        this._showResultInfo(result);
        steps.restart();
        gameSound.stop();

        switch (result) {
            case 'WIN':
                wallet.increment(300);
                storeTown.add(this.convicted);
                winSound.play();
                break;
            case 'LOSE':
                storeCemetery.add(this.convicted);
                loseSound.play();
                break;
        }
    }
}

export const game = new Game();
