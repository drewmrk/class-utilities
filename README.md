# class-utilities

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/drewmrk/class-utilities)
![npm](https://img.shields.io/npm/dt/class-utilities?style=flat-square) ![CircleCI](https://img.shields.io/circleci/build/github/drewmrk/class-utilities?style=flat-square)

A collection of useful utilities for HTML classes

The `class-utilities` package is designed to keep code DRY by simplifying actions one may perform while calling `document.getElementsByClassName()`.

For example, instead of doing this:

```js
;[...document.getElementsByClassName('Boo')].forEach(i => {
  i.innerHTML('<p>Boring</p>')
})
```

`class-utilities` allow you to do this:

```js
classUtilities('Yay').innerHTML('<p>Neat</p>')
```

Currently, `class-utilities` supports the following methods:

```js
length
innerHTML
textContent
innerText
appendChild
remove
id
```

## Methods/Examples

### `length`

`length` returns the amount of elements with the specified class

```js
classUtilities('test').length()
```

### `innerHTML`

`innerHTML` replaces, or appends HTML to elements with the specified class. Or, if no parameters are provided, an array containing the `innerHTML` data of the elements will be returned

```js
classUtilities('test').innerHTML('<p>Replace</p>') // Replace
classUtilities('test').innerHTML('<p>Append</p>', 'a') // Append
classUtilities('test').innerHTML() // Return array with current `innerHTML` data
```

### `textContent`

`textContent` is very similar to `innerHTML` but instead deals solely with text

```js
classUtilities('test').textContent('Replace') // Replace
classUtilities('test').textContent('Append', 'a') // Append
classUtilities('test').textContent() // Return array with current `textContent` data
```

### `innerText`

```js
classUtilities('test').innerText('Replace') // Replace
classUtilities('test').innerText('Append', 'a') // Append
classUtilities('test').innerText() // Return array with current `innerText` data
```

### `appendChild`

`appendChild` appends an element as the child of the classes with the specified class

```js
const container = document.createElement('div')
classUtilities('test').appendChild(container)
```

### `remove`

`remove` simply removes all elements with the specified class

```js
classUtilities('test').remove()
```

### `id`

`id` sets a unique identifier to each element by appending the given data `-#` to it. If no parameters are supplied, `id` will return an array with `id` data of the elements

```js
classUtilities('test').id('test') // test-0, test-1, test-2, etc.
classUtilities('test').id() // Return array with current `id` data
```

### Chaining

Chaining provides the ability to selectively iterate over elements with a parent that has a specific class.

Currently, `class-utilities` only supports chaining up to one depth, e.g. `classUtilities('test test-1')` will work, but `classUtilities('test test-1 test-2')` will not.
