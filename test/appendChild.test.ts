import './setupTests'
import classUtilities from '../src'

test('Append a child element to elements with class "test"', () => {
  const el = document.createElement('div')
  el.innerHTML += `<p class="test123">Hello</p>`
  classUtilities('test').appendChild(el)
  expect(document.getElementsByClassName('test123')[0].textContent).toBe(
    'Hello'
  )
})
