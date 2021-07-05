import './setupTests'
import classUtilities from '../src'

test('Remove elements with class "test"', () => {
  classUtilities('test').remove()
  expect(classUtilities('test').length()).toBe(0)
})
