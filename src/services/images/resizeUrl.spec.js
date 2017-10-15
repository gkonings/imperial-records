/* eslint-env jest */
import resizeUrl from './resizeUrl'

const correctInput = 'https://lh3.googleusercontent.com/-7bWe5X_yvmU/AAAAAAAAAAI/AAAAAAAAEYk/GbQmHxgQo9o/photo.jpg'
const correctOutput = 'https://lh3.googleusercontent.com/-7bWe5X_yvmU/AAAAAAAAAAI/AAAAAAAAEYk/GbQmHxgQo9o/s80-c/photo.jpg'

const incorrectInput = 'someOtherString'

test('returns same string without param', () => {
  const output = resizeUrl(correctInput)
  expect(output).toBe(correctInput)
})

test('returns same string with incorrectInput', () => {
  const output = resizeUrl(incorrectInput)
  expect(output).toBe(incorrectInput)
})

test('returns undefined with undefined input', () => {
  const output = resizeUrl()
  expect(output).toBe(undefined)
})

test('returns undefined with undefined input(80)', () => {
  const output = resizeUrl(undefined, 80)
  expect(output).toBe(undefined)
})

test('returns a resized string (80)', () => {
  const output = resizeUrl(correctInput, 80)
  expect(output).toBe(correctOutput)
})
