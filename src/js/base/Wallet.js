import { Common } from './Common';
import { WALLET } from './elements';

class Wallet extends Common {
    constructor() {
        super();
        this.value = 0;
    }

    increment(value) {
        this.value += value;
        this.injectToDOM(WALLET, this.value);
        this._saveLocalStorage();
    }

    decrement(value) {
        this.value -= value;
        if (this.value < 0) this.value = 0;
        this.injectToDOM(WALLET, this.value);
        this._saveLocalStorage();
    }

    _saveLocalStorage() {
        this.saveLocalStorage('walletValue', this.value);
    }

    getLocalStorage() {
        let value = this.readLocalStorage('walletValue');

        if (!value) {
            // walletValue not exist localStorage then set default value - 0
            this.value = 0;
        } else {
            // walletValue is exist localStorage then set it to value
            this.value = value;
        }

        this.injectToDOM(WALLET, this.value);
    }
}

export const wallet = new Wallet();
