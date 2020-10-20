import { steps } from '../base/Steps';
import { game, RESULT } from '../base/Game';

export const TYPES_BOOSTERS = {
    BACKWARDS: 'BACKWARDS',
    WIN: 'WIN',
};

export const BOOSTERS = [
    {
        text: 'Cofnij się o 1 krok',
        price: 300,
        usage: {
            type: TYPES_BOOSTERS.BACKWARDS,
            numberBack: 1,
        },
    },
    {
        text: 'Cofnij się o 3 kroki',
        price: 500,
        usage: {
            type: TYPES_BOOSTERS.BACKWARDS,
            numberBack: 3,
        },
    },
    {
        text: 'Cofnij się o 4 kroki',
        price: 600,
        usage: {
            type: TYPES_BOOSTERS.BACKWARDS,
            numberBack: 4,
        },
    },
    {
        text: 'Cofnij się o 5 kroków',
        price: 800,
        usage: {
            type: TYPES_BOOSTERS.BACKWARDS,
            numberBack: 5,
        },
    },
    {
        text: 'Ocal bezwarunkowo',
        price: 2000,
        usage: {
            type: TYPES_BOOSTERS.WIN,
        },
    },
];

export const boostersUsage = (type, boosterUsage) => {
    switch (type) {
        case TYPES_BOOSTERS.BACKWARDS:
            steps.decrementCurrentStep(boosterUsage.numberBack);
            break;
        case TYPES_BOOSTERS.WIN:
            game.finishGame(RESULT.WIN);
            break;
    }
};
