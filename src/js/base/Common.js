import { getElement, getElements } from '../functions/functions';
import { ScreenToggler } from './ScreenToggler';

export class Common extends ScreenToggler {
    constructor() {
        super();
    }

    getElement(selector) {
        return getElement(selector);
    }

    getElements(selector) {
        return getElements(selector);
    }

    injectToDOM(elementDOM, textContent) {
        elementDOM.textContent = textContent;
    }

    saveLocalStorage(name, value) {
        if (typeof name === 'string') {
            localStorage[name] = JSON.stringify(value);
        } else {
            throw new Error(
                `Property "name" expected be typeof string: ${name} is ${typeof name}`,
            );
        }
    }

    readLocalStorage(name) {
        if (typeof name === 'string') {
            let stored = localStorage[name];
            if (stored) return JSON.parse(stored);
        } else {
            throw new Error(
                `Property "name" expected be typeof string: ${name} is ${typeof name}`,
            );
        }
    }

    logLocalStorage() {
        console.log(localStorage);
    }

    clearLocalStorage() {
        window.localStorage.clear();
    }

    // SweetAlert2 library (https://sweetalert2.github.io/)
    showErrorAlert(title, text) {
        Swal.fire(title, text, 'error');
    }
    showSuccessAlert(title, text) {
        Swal.fire(title, text, 'success');
    }
    showWarningAlert(title, text) {
        Swal.fire(title, text, 'warning');
    }
    showInfoAlert(title, text) {
        Swal.fire(title, text, 'info');
    }
    showQuestionAlert(title, text) {
        Swal.fire(title, text, 'question');
    }
}
