import { correctGuess, actionsTypes } from './';

describe('correctHuess', () => {
    test('returns an action with type `CORRECT_GUESS', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionsTypes.CORRECT_GUESS });
    });

});
