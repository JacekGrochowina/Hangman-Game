import { Common } from './Common';
import { boughtBoosters } from './BoughtBoosters';
import { SHOP_LIST } from './elements';
import { BOOSTERS } from '../data/shopBoosters';
import { wallet } from './Wallet';

class Shop extends Common {
    constructor() {
        super();
    }

    init() {
        BOOSTERS.forEach((item, number) => {
            this._render(item.text, item.price, number);
        });
    }

    _render(text, price, number) {
        const li = document.createElement('li');
        const spanText = document.createElement('span');
        const spanPrice = document.createElement('span');
        const btnBuy = document.createElement('button');

        li.classList.add('shop__item');
        spanText.classList.add('shop__item-span');
        spanPrice.classList.add('shop__item-span');
        spanText.classList.add('text');
        spanPrice.classList.add('price');
        btnBuy.classList.add('shop__item-btn');
        btnBuy.classList.add('buy');

        spanText.textContent = text;
        spanPrice.innerHTML = `${price}<i class="icon fas fa-coins"></i>`;
        btnBuy.textContent = 'Kup';

        btnBuy.addEventListener('click', () => {
            const booster = BOOSTERS[number];
            if (wallet.value >= booster.price) {
                boughtBoosters.buy(booster);
                this.showSuccessAlert('Udało się', 'Kupiłeś ulepszenie.');
            } else {
                this.showErrorAlert(
                    'Nie udało się',
                    'Nie masz wystarczająco pieniędzy.',
                );
            }
        });

        li.appendChild(spanText);
        li.appendChild(spanPrice);
        li.appendChild(btnBuy);

        SHOP_LIST.appendChild(li);
    }
}

export const shop = new Shop();
