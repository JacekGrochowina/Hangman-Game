import { Common } from './Common';
import { StorePopup } from './StorePopup';
import {
    STORE_TOWN,
    STORE_CEMETERY,
    NUMBER_SURVIVED,
    NUMBER_DIED,
} from './elements';

class Store extends Common {
    constructor({
        popupText,
        itemIconSrc,
        popupImageSrc,
        storageName,
        selectorMainWrapper,
        selectorContainLenght,
    }) {
        super();

        this.contain = [];

        this.popupText = popupText;
        this.itemIconSrc = itemIconSrc;
        this.popupImageSrc = popupImageSrc;
        this.storageName = storageName;
        this.selectorMainWrapper = selectorMainWrapper;
        this.selectorContainLenght = selectorContainLenght;
    }

    add(convicted) {
        console.log(convicted);

        const _convicted = {
            name: convicted.name,
            surname: convicted.surname,
            age: convicted.age,
        };

        this.contain.push(_convicted);
        this._saveLocalStorage();
        this._render();
    }

    _render() {
        const mainWrapper = this.selectorMainWrapper;
        mainWrapper.innerHTML = null;

        this.contain.forEach((item) => {
            const image = this._createImage();
            this._handleClick(image, item);
            mainWrapper.appendChild(image);
        });

        this.injectToDOM(this.selectorContainLenght, this.contain.length);
    }

    _createImage() {
        const image = document.createElement('img');
        image.src = this.itemIconSrc;
        image.classList.add('tabs-image');
        return image;
    }

    _handleClick(image, item) {
        const popupDetails = new StorePopup(
            item.name,
            item.surname,
            item.age,
            this.popupText,
            this.popupImageSrc,
        );

        image.addEventListener('click', () => {
            popupDetails.show();
        });
    }

    _saveLocalStorage() {
        this.saveLocalStorage(this.storageName, this.contain);
    }

    getLocalStorage() {
        let value = this.readLocalStorage(this.storageName);

        if (!value) {
            // storageName not exist localStorage then set default value - []
            this.contain = [];
        } else {
            // storageName is exist localStorage then set it
            this.contain = value;
            this._render();
            this.injectToDOM(this.selectorContainLenght, this.contain.length);
        }
    }
}

const TYPES_STORE = {
    TOWN: {
        popupText: 'HAPPY LIFE',
        itemIconSrc: './assets/images/house.svg',
        popupImageSrc: './assets/images/thx.gif',
        storageName: 'storeTown',
        selectorMainWrapper: STORE_TOWN,
        selectorContainLenght: NUMBER_SURVIVED,
    },
    CEMETERY: {
        popupText: 'RIP',
        itemIconSrc: './assets/images/grave.svg',
        popupImageSrc: './assets/images/rip.gif',
        storageName: 'storeCemetery',
        selectorMainWrapper: STORE_CEMETERY,
        selectorContainLenght: NUMBER_DIED,
    },
};

const CONFIG_TOWN = TYPES_STORE.TOWN;
const CONFIG_CEMETERY = TYPES_STORE.CEMETERY;

export const storeTown = new Store(CONFIG_TOWN);
export const storeCemetery = new Store(CONFIG_CEMETERY);
