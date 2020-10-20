import { SOLUTIONS } from '../data/solutions';
import { Common } from './Common';
import {
    SOLUTION,
    SOLUTION_CATEGORY,
    SOLUTION_RESULT_GAME,
} from './elements';
import { keyboard } from './Keyboard';

class Solution extends Common {
    constructor() {
        super();
        let solution = {
            text: null,
            category: null,
        };
        this.getText = () => solution.text;
        this.getCategory = () => solution.category;
        this.setSolution = (object) => (solution = object);

        this.guessed = [];
    }

    init() {
        this.setSolution(this._getRandom());
        this._clearGuessed();
        keyboard.enableLetters();

        const category = this.getCategory();
        const solution = this.getText();

        this.injectToDOM(SOLUTION_CATEGORY, category);
        this.injectToDOM(SOLUTION, this.encrypt(solution));
        this.injectToDOM(SOLUTION_RESULT_GAME, solution);
    }

    guessLetter(letter) {
        this.guessed.push(letter);
    }

    isGuessLetter(letter) {
        const text = this.getText();
        const guessed = this.guessed;

        if (text.includes(letter) || text.includes(letter.toUpperCase())) {
            if (text.includes(letter)) guessed.push(letter);
            if (text.includes(letter.toUpperCase()))
                guessed.push(letter.toUpperCase());

            return true;
        }
        return false;
    }

    encrypt() {
        let content = '';
        const text = this.getText();
        const guessed = this.guessed;

        for (const char of text) {
            if (char == ' ' || guessed.includes(char)) {
                content += char;
            } else {
                content += '_';
            }
        }
        return content;
    }

    render() {
        const content = this.encrypt();
        this.injectToDOM(SOLUTION, content);
    }

    _getRandom() {
        return SOLUTIONS[Math.floor(Math.random() * SOLUTIONS.length)];
    }

    _clearGuessed() {
        this.guessed = [];
    }

    logSolution() {
        console.log(`category: ${this.getCategory()}`);
        console.log(`solution: ${this.getText()}`);
    }
}

export const solution = new Solution();
