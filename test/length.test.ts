import './setupTests'
import classUtilities from '../src'

test('Counts number of elements with class "test"', () => {
  expect(classUtilities('test').length()).toBe(5)
})
