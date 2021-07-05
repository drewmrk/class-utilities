# class-utilities

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
appendChild
remove
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
