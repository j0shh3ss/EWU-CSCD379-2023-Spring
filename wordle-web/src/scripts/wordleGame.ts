import { Word } from '@/scripts/word';
import { WordsService } from './wordsService';

export class WordleGame {
  constructor(secretWord?: string | null) {
    this.restartGame(secretWord);
  }
  guesses = new Array<Word>();
  secretWord = '';

  restartGame(secretWord?: string | null) {
    this.secretWord = secretWord || WordsService.getRandomWord();
    this.guesses.splice(0);
  }

  submitGuess(guess: string) {
    const word = new Word(guess);
    this.guesses.push(word);
    word.check(this.secretWord);
  }

  getAvailableWords() {
    const availableWords: string[] = [];
    const secretWordChars = this.secretWord.split('');
    const wordList = WordsService.getWordsList();

    for (const word of wordList) {
      const chars = word.split('');
      let isAvailable = true;

      for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        const index = secretWordChars.indexOf(char);

        if (index === -1) {
          isAvailable = false;
          break;
        } else {
          secretWordChars.splice(index, 1);
        }
      }

      if (isAvailable) {
        availableWords.push(word);
      }

      if (secretWordChars.length === 0) {
        break;
      } else {
        secretWordChars.splice(0);
        secretWordChars.push(...this.secretWord.split(''));
      }
    }

    return availableWords;
  }
}
