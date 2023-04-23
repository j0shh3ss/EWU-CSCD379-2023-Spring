<template>
  <h1>Wordle Mind Bender</h1>
  <v-text-field v-model="guess" label="Guess" variant="solo"></v-text-field>
  <v-btn @click="checkGuess">Check</v-btn>
  <div>
    <v-row v-for="word in game.guesses" :key="word.text">
      <v-col v-for="letter in word.letters" :key="letter.char">
        <LetterButton :letter="letter"></LetterButton>
        <v-btn :color="letter.color">
          {{ letter.char }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
  <h2>{{ guess }}</h2>
  <h3>{{ game.secretWord }}</h3>
</template>

<script setup lang="ts">
import LetterButton from '@/components/LetterButton.vue'
import { WordleGame } from '@/scripts/wordleGame'
import { ref, reactive } from 'vue'
const guess = ref('')
const game = reactive(new WordleGame())
console.log(game.secretWord)
function checkGuess() {
  game.submitGuess(guess.value)
}

// export default {
//   setup() {
//     const guess = ref("");
//     const game = reactive(new WordleGame());
//     const dialog = ref(false);
//     const availableWords = ref<string[]>([]);

//     function checkGuess() {
//       game.submitGuess(guess.value);
//     }

//     function showAvailableWords() {
//       availableWords.value = game.getAvailableWords();
//       dialog.value = true;
//     }

//     function selectWord(word: string) {
//       guess.value = word;
//       dialog.value = false;
//     }

//     return {
//       guess,
//       game,
//       dialog,
//       availableWords,
//       checkGuess,
//       showAvailableWords,
//       selectWord,
//     };
//   },
// };
</script>