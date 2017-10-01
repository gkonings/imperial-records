/* eslint-env jest */
import resizeUrl from './resizeUrl'

test('returns same string without param', () => {
  const input = 'https://lh3.googleusercontent.com/-7bWe5X_yvmU/AAAAAAAAAAI/AAAAAAAAEYk/GbQmHxgQo9o/photo.jpg'
  const output = resizeUrl(input)
  expect(output).toBe(input)
})

test('returns a resized string (80)', () => {
  const input = 'https://lh3.googleusercontent.com/-7bWe5X_yvmU/AAAAAAAAAAI/AAAAAAAAEYk/GbQmHxgQo9o/photo.jpg'
  const output = resizeUrl(input, 80)
  const expected = 'https://lh3.googleusercontent.com/-7bWe5X_yvmU/AAAAAAAAAAI/AAAAAAAAEYk/GbQmHxgQo9o/s80-c/photo.jpg'

  expect(output).toBe(expected)
})
