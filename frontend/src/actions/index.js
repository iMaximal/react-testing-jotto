export const actionsTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
};

export function correctGuess() {
    return { type: actionsTypes.CORRECT_GUESS };
}
