import './setupTests'
import classUtilities from '../src'

test('Sets `innerHTML` of elements with class "test"', () => {
  classUtilities('test').innerHTML('Test')
  ;[...document.getElementsByClassName('test')].forEach(i => {
    expect(i.innerHTML).toBe('Test')
  })
})

test('Returns `innerHTML` of elements in an array with class "test"', () => {
  const innerHTMLData = classUtilities('test').innerHTML()
  innerHTMLData !== undefined &&
    innerHTMLData.forEach(i => {
      expect(i).toBe('Test')
    })
})

test('Merge `innerHTML` of elements with class "test"', () => {
  classUtilities('test').innerHTML('Test', 'a')
  const innerHTMLData = classUtilities('test').innerHTML()
  innerHTMLData !== undefined &&
    innerHTMLData.forEach(i => {
      expect(i).toBe('TestTest')
    })
})

test('Set `innerHTML` of elements with class "test" (<p>)', () => {
  classUtilities('test').innerHTML(`<p class="test123">Hello</p>`)
  expect(document.getElementsByClassName('test123')[0].textContent).toBe(
    'Hello'
  )
})
