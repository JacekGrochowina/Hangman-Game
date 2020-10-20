import { solution } from './Solution';
import { steps } from './Steps';
import { game, RESULT } from './Game';
import { KEYBOARD_LETTERS } from './elements';

class Keyboard {
    constructor() {
        this.letters = KEYBOARD_LETTERS;
    }

    init() {
        this.letters.forEach((letter) => {
            this._handleClick(letter);
        });
    }

    enableLetters() {
        this.letters.forEach((letter) => (letter.disabled = false));
    }

    _handleClick(element) {
        element.addEventListener('click', (event) => {
            this._guessLetter(element, event);
        });
    }

    _guessLetter(element, event) {
        this._disableLetter(event);
        const letter = element.textContent.toLowerCase();

        if (solution.isGuessLetter(letter)) {
            solution.render();
            if (this._isWin()) {
                game.finishGame(RESULT.WIN); // win Game
            }
        } else {
            steps.incrementCurrentStep(1);
            steps.render();
            if (this._isLose()) {
                game.finishGame(RESULT.LOSE); // lose Game
            }
        }
    }

    _isWin() {
        const content = solution.encrypt();
        if (!content.includes('_')) return true;
    }

    _isLose() {
        return steps.currentStep == steps.finishStep;
    }

    _disableLetter(event) {
        event.target.disabled = true;
    }

    _enableLetter(event) {
        event.disabled = false;
    }
}

export const keyboard = new Keyboard();
