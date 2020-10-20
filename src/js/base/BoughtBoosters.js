import { Common } from './Common';
import { BOUGHT_BOOSTERS } from './elements';
import { TYPES_BOOSTERS, boostersUsage } from '../data/shopBoosters';
import { wallet } from './Wallet';

const TYPE_BACKWARDS = TYPES_BOOSTERS.BACKWARDS;
const TYPE_WIN = TYPES_BOOSTERS.WIN;

class BoughtBoosters extends Common {
    constructor() {
        super();
        this.contain = [];
    }

    buy(booster) {
        this.contain.push(booster);
        wallet.decrement(booster.price);
        this._saveLocalStorage();
        this._render();
    }

    _render() {
        BOUGHT_BOOSTERS.innerHTML = null;

        this.contain.forEach((booster, number) => {
            const li = document.createElement('li');
            const spanText = document.createElement('span');
            const btnUse = document.createElement('button');

            li.classList.add('item__bought-boosters');
            btnUse.classList.add('item__use-btn');

            spanText.textContent = this.contain[number].text;
            btnUse.textContent = 'użyj';

            btnUse.addEventListener('click', () => {
                this._useBooster(booster, number);
            });

            li.appendChild(spanText);
            li.appendChild(btnUse);

            BOUGHT_BOOSTERS.appendChild(li);
        });
    }

    _use(booster) {
        const boosterUsage = booster.usage;

        switch (boosterUsage.type) {
            case TYPE_BACKWARDS:
                boostersUsage(TYPE_BACKWARDS, boosterUsage);
                break;
            case TYPE_WIN:
                boostersUsage(TYPE_WIN, boosterUsage);
                break;
        }

        this._saveLocalStorage();
    }

    _useBooster(booster, number) {
        this.contain.splice(number, 1);
        this._render();
        this._use(booster);
    }

    _saveLocalStorage() {
        this.saveLocalStorage('boughtBoosters', this.contain);
    }

    getLocalStorage() {
        let value = this.readLocalStorage('boughtBoosters');

        if (!value) {
            // boughtBoosters not exist localStorage then set default value - []
            this.contain = [];
        } else {
            // boughtBoosters is exist localStorage then set it
            this.contain = value;
            this._render();
        }
    }
}

export const boughtBoosters = new BoughtBoosters();
