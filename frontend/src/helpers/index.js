/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
    if (!secretWord) return;
    const secretLetters = secretWord.split('');
    const guessedLetterSet = new Set(guessedWord.split(''));
    return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
}
