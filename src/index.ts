/**
 * A collection of useful utilities for HTML classes (class-utilities)
 */
class Utilities {
  private className: Element[] = []

  constructor(className: string) {
    className = className.trim()
    if (className.includes(' ')) {
      const classNameStrings = className.split(' ')
      ;[...document.getElementsByClassName(classNameStrings[1])].forEach(i => {
        i.parentElement !== null &&
          i.parentElement.className === classNameStrings[0] &&
          this.className.push(i)
      })
    } else {
      this.className = [...document.getElementsByClassName(className)]
    }
  }

  /**
   * Compute the number of elements
   *
   * @returns Number of elements
   */
  length() {
    return this.className.length
  }

  /**
   * Set the `innerHTML` of elements
   *
   * @param data Data for `innerHTML`
   * @param append Option to append data to `innerHTML`
   * @returns Array of `innerHTML` data for elements
   */
  innerHTML(data?: string, append?: 'a') {
    if (data !== undefined) {
      this.className.forEach(i => {
        append === 'a' ? (i.innerHTML += data) : (i.innerHTML = data)
      })
    } else {
      const innerHTMLData: string[] = []
      this.className.forEach(i => {
        innerHTMLData.push(i.innerHTML)
      })
      return innerHTMLData
    }
  }

  /**
   * Set the `textContent` of elements
   *
   * @param data Data for `textContent`
   * @param append Option to append data to `textContent`
   * @returns Array of `textContent` data for elements
   */
  textContent(data?: string, append?: 'a') {
    if (data !== undefined) {
      this.className.forEach(i => {
        append === 'a' ? (i.textContent += data) : (i.textContent = data)
      })
    } else {
      const textContentData: string[] = []
      this.className.forEach(i => {
        i.textContent !== null && textContentData.push(i.textContent)
      })
      return textContentData
    }
  }

  /**
   * Set the `innerText` of elements
   *
   * @param data Data for `innerText`
   * @param append Option to append data to `innerText`
   * @returns Array of `innerText` data for elements
   */
  innerText(data?: string, append?: 'a') {
    if (data !== undefined) {
      this.className.forEach(i => {
        append === 'a'
          ? ((i as HTMLElement).innerText += data)
          : ((i as HTMLElement).innerText = data)
      })
    } else {
      const innerTextData: string[] = []
      this.className.forEach(i => {
        i.textContent !== null &&
          innerTextData.push((i as HTMLElement).innerText)
      })
      return innerTextData
    }
  }

  /**
   * Set the `appendChild` of elements
   *
   * @param data Data for `appendChild`
   */
  appendChild(data: Element) {
    this.className.forEach(i => {
      i.appendChild(data)
    })
  }

  /**
   * Remove elements with specified class name
   */
  remove() {
    this.className.forEach(i => {
      i.remove()
    })
  }

  /**
   * Set a unique id for each element
   *
   * @param data Data for `id`
   * @returns Array of `id` data for elements
   */
  id(data?: string) {
    if (data !== undefined) {
      this.className.forEach((i, index) => {
        i.id = `${data}-${index}`
      })
    } else {
      const idData: string[] = []
      this.className.forEach(i => {
        i.id !== null && idData.push(i.id)
      })
      return idData
    }
  }
}

/**
 * A collection of useful utilities for HTML classes (class-utilities)
 */
const classUtilities = (className: string) => new Utilities(className)

export default classUtilities
