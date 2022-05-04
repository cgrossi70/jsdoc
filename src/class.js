/**
 * Class create a rectangle
 * @example 
 * const rectangle  = new Rectangle(20,10)
 * console.log('Area of rectangle is: ',rectangle.getArea())
 * console.log('Perimeter of rectangle is: ',rectangle.getPerimeter())
 * 
 * @see https://www.github.com
 * @todo Implement transpolate method
 */

class Rectangle {

  /**
   * @param {number} base The base of rectangle
   * @param {number} height The height of rectangle
   */
  constructor(base, height){
    this.base = base;
    this.height = height
  }

  /**
   * Calculate area of rectangle
   * @returns {number} return the area of Rectangle
   */
  getArea(){
    return this.base*this.height
  }
  
  /**
   * Calculate perimeter of rectangle
   * @returns {number} return the perimeter of Rectangle
   */
   getPerimeter(){
    return 2+this.base + 2 * this.height
  }
}

/**
 * Know more in {@link Rectangle}
 */
const rectangle  = new Rectangle(20,10)
console.log('Area of rectangle is: ',rectangle.getArea())
console.log('Perimeter of rectangle is: ',rectangle.getPerimeter())
