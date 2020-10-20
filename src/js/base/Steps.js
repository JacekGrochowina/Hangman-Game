import { HANGMAN_PATH, HANGMAN_PATH_SHADOW } from './elements';

class Steps {
    constructor() {
        this.currentStep = 0;
        this.finishStep = 10;
    }

    render() {
        HANGMAN_PATH.forEach((path) => this._hide(path));
        HANGMAN_PATH_SHADOW.forEach((path) => this._hide(path));

        HANGMAN_PATH.forEach((path, number) => {
            if (number < this.currentStep) this._show(path);
        });

        HANGMAN_PATH_SHADOW.forEach((path, number) => {
            if (number < this.currentStep) this._show(path);
        });
    }

    restart() {
        this.currentStep = 0;
        this.render();
    }

    incrementCurrentStep(value) {
        this.currentStep += value;
        this.render();
    }

    decrementCurrentStep(value) {
        this.currentStep -= value;
        if (this.currentStep < 0) this.currentStep = 0;
        this.render();
    }

    _hide(element) {
        element.classList.remove('visible');
    }

    _show(element) {
        element.classList.add('visible');
    }
}

export const steps = new Steps();
