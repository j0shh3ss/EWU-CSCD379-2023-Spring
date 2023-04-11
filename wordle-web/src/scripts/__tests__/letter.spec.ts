////letter.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Letter, LetterStatus } from '@/scripts/letter'

//help me
describe('Letter', () => {
  it('Gets Correct Color', () => {
    const letter = new Letter('a')
    letter.status = LetterStatus.Correct
    expect(letter.color).toBe('green')
  })

  it('Gets Misplaced Color', () => {
    const letter = new Letter('a')
    letter.status = LetterStatus.Misplaced
    expect(letter.color).toBe('orange')
  })
})