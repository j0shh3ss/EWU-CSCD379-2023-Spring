
import { Letter, LetterStatus } from '@/scripts/letter'
import { Word } from '@/scripts/word'
import { ref, reactive } from 'vue'

export class WordleGame {
    guesses = new Array<Word>()
    secretWord = ''

    if(this.letters.length !== secretWord.length){
        console.log("Incorrect length")
        return
    }
}
