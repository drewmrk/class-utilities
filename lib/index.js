/**
 * A collection of useful utilities for HTML classes (class-utilities)
 */
class Utilities {
  constructor(className) {
    this.className = [...document.getElementsByClassName(className)]
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
  innerHTML(data, append) {
    if (data !== undefined) {
      this.className.forEach(i => {
        append === 'a' ? (i.innerHTML += data) : (i.innerHTML = data)
      })
    } else {
      const innerHTMLData = []
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
  textContent(data, append) {
    if (data !== undefined) {
      this.className.forEach(i => {
        append === 'a' ? (i.textContent += data) : (i.textContent = data)
      })
    } else {
      const textContentData = []
      this.className.forEach(i => {
        i.textContent !== null && textContentData.push(i.textContent)
      })
      return textContentData
    }
  }
  /**
   * Set the `appendChild` of elements
   *
   * @param data Data for `appendChild`
   */
  appendChild(data) {
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
}
/**
 * A collection of useful utilities for HTML classes (class-utilities)
 */
const classUtilities = className => new Utilities(className)
export default classUtilities
