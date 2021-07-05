/**
 * A collection of useful utilities for HTML classes (class-utilities)
 */
declare class Utilities {
  private className
  constructor(className: string)
  /**
   * Compute the number of elements
   *
   * @returns Number of elements
   */
  length(): number
  /**
   * Set the `innerHTML` of elements
   *
   * @param data Data for `innerHTML`
   * @param append Option to append data to `innerHTML`
   * @returns Array of `innerHTML` data for elements
   */
  innerHTML(data?: string, append?: 'a'): string[] | undefined
  /**
   * Set the `textContent` of elements
   *
   * @param data Data for `textContent`
   * @param append Option to append data to `textContent`
   * @returns Array of `textContent` data for elements
   */
  textContent(data?: string, append?: 'a'): string[] | undefined
  /**
   * Set the `appendChild` of elements
   *
   * @param data Data for `appendChild`
   */
  appendChild(data: Element): void
  /**
   * Remove elements with specified class name
   */
  remove(): void
}
/**
 * A collection of useful utilities for HTML classes (class-utilities)
 */
declare const classUtilities: (className: string) => Utilities
export default classUtilities
