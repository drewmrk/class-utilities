import './setupTests'
import classUtilities from '../src'

test('Sets `textContent` of elements with class "test"', () => {
  classUtilities('test').textContent('Test')
  ;[...document.getElementsByClassName('test')].forEach(i => {
    expect(i.textContent).toBe('Test')
  })
})

test('Returns `textContent` of elements in an array with class "test"', () => {
  const textContentData = classUtilities('test').textContent()
  textContentData !== undefined &&
    textContentData.forEach(i => {
      expect(i).toBe('Test')
    })
})

test('Merge `textContent` of elements with class "test"', () => {
  classUtilities('test').textContent('Test', 'a')
  const textContentData = classUtilities('test').textContent()
  textContentData !== undefined &&
    textContentData.forEach(i => {
      expect(i).toBe('TestTest')
    })
})
