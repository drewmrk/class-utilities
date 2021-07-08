import './setupTests'
import classUtilities from '../src'

test('Sets `innerText` of elements with class "test"', () => {
  classUtilities('test').innerText('Test')
  ;[...document.getElementsByClassName('test')].forEach(i => {
    expect((i as HTMLElement).innerText).toBe('Test')
  })
})

test('Returns `innerText` of elements in an array with class "test"', () => {
  const innerTextData = classUtilities('test').innerText()
  innerTextData !== undefined &&
    innerTextData.forEach(i => {
      expect(i).toBe('Test')
    })
})

test('Merge `innerText` of elements with class "test"', () => {
  classUtilities('test').innerText('Test', 'a')
  const innerTextData = classUtilities('test').innerText()
  innerTextData !== undefined &&
    innerTextData.forEach(i => {
      expect(i).toBe('TestTest')
    })
})
