import { Common } from './Common';
import {
    CONVICTED_NAME,
    CONVICTED_SURNAME,
    CONVICTED_AGE,
} from './elements';

export class Convicted extends Common {
    constructor() {
        super();
        this.name;
        this.surname;
        this.age;

        this._randomUser();
    }

    _randomUser() {
        fetch('https://randomuser.me/api/?')
            .then((response) => response.json())
            .then((data) => {
                const name = data.results[0].name.first;
                const surname = data.results[0].name.last;
                const age = data.results[0].dob.age;
                this._setConvicted(name, surname, age);
            })
            .catch((error) => {
                const name = 'Anonimowy';
                const surname = 'Nieszczęśnik';
                const age = 'nieznane';
                this._setConvicted(name, surname, age);

                console.error('Error:', error);
            });
    }

    _setConvicted(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;

        this.injectToDOM(CONVICTED_NAME, this.name);
        this.injectToDOM(CONVICTED_SURNAME, this.surname);
        this.injectToDOM(CONVICTED_AGE, this.age);
    }
}
