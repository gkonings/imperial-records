/* eslint-env jest */
import toUser from './toUser'

const firebaseObject = {
  exclude: 'blala',
  displayName: 'Luke Skywalker'
}

test('returns correct userProperties', () => {
  const input = firebaseObject

  const expected =
    {
      displayName: 'Luke Skywalker'
    }

  const output = toUser(input)
  expect(output).toEqual(expected)
})
