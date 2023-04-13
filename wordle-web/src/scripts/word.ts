import { Letter } from './letter';

export class Word {
    public letters = Array<Letter>();

    constructor(word?: string | null) {
        if(word) {
            //Add word letters to array
            for(const letter of word) {
                this.letters.push(new Letter(letter))
            }
        }
    }

    get text() {
        return this.letters.map((l) => l.letter).join('')
    }

    push(letter: Letter) {
        this.letters.push(letter)
    }

    check(secretWord: string) {
        console.log(this.text)
        //check length
        
        const results = new Word()

        const guessChars = guess.value.split('')
        const secretChars = secretWord.split('')
        for(let i = 0; i < 5; i++){
        results.push(new Letter(guess.value[i]))
        if(guess.value[i] === secretWord[i]){
            results.letters[i].status = LetterStatus.Correct
            guessChars[i] = '_'
            secretChars[i] = '_'
            console.log(`Letter ${i} is correct`)
        } else {
            isCorrect = false
            results.letters[i].status = LetterStatus.Wrong
            console.log(`Letter ${i} is wrong`)
        }
        }
        for(let i = 0; i < 5; i++){
            if(guessChars[i] === '_'){
                for(let j = 0; j < 5; j++){
                    if(secretChars[j] === guessChars[i])
                    results.letters[i].status = LetterStatus.Misplaced
                    guessChars[i] = '_'
                    secretChars[j] = '_'
                    console.log(`Letter ${i} is misplaced`)
                    break
                }
            }
        }
        console.log(guessChars)
        console.log(secretChars)
        console.log(results)
        console.log(isCorrect)
        guesses.push(results)
        console.log(guesses)
        }
}