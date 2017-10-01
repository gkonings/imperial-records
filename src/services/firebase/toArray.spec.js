/* eslint-env jest */
import toArray from './toArray'

const firebaseObject = {
  '-KtNOUiCgYj63CU_zta2': {
    'faction': 'faction-empire',
    'name': 'Darth Vader'}
}

test('returns an array', () => {
  const input = firebaseObject

  const expected = [
    {
      key: '-KtNOUiCgYj63CU_zta2',
      faction: 'faction-empire',
      name: 'Darth Vader'
    }
  ]
  const output = toArray(input)
  expect(output).toEqual(expected)
})

test('returns all items', () => {
  const input = firebaseObject
  const expected = Object.keys(firebaseObject).length
  const output = toArray(input).length

  expect(output).toBe(expected)
})
