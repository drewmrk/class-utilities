import './setupTests'
import classUtilities from '../src'

test('Set id of each element to "test"', () => {
  classUtilities('test').id('test')
  expect(document.getElementsByClassName('test')[3].id).toBe('test-3')
})

test('Return array with `id` data', () => {
  const idData = classUtilities('test').id()
  idData !== undefined &&
    idData.forEach((i, index) => {
      expect(i).toBe(`test-${index}`)
    })
})
