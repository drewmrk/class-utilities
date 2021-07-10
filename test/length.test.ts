import './setupTests'
import classUtilities from '../src'

test('Counts number of elements with class "test"', () => {
  expect(classUtilities('test').length()).toBe(5)
})

test('Counts number of elements with class "test-chain-1" with parent "test-chain"', () => {
  expect(classUtilities('test-chain test-chain-1').length()).toBe(1)
})
