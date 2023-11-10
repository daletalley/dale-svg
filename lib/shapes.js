// lib/shapes.js
// Base class for all shapes
class Shape {
    //Constructor for the shapes
    constructor(color) {
        this.color = color;
    }
    //Method to change the color of the shape
    setColor(color) {
        this.color = color;
    }

    //Method to render the shape, to be overridden by subclasses
    render() {
        //Default render behavior returns an empty string
        return '';
    }
}

// Triangle class inheriting from Shape
class Triangle extends Shape {
    // Override of the render method for Triangle
    render() {
      // Returns SVG markup for a triangle with the specified color
      return `<svg width="300" height="200"><polygon points="150,10 250,190 50,190" fill="${this.color}" /></svg>`;
    }
  }
  
  // Circle class inheriting from Shape
  class Circle extends Shape {
    // Override of the render method for Circle
    render() {
      // Returns SVG markup for a circle with the specified color
      return `<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.color}" /></svg>`;
    }
  }
  
  // Square class inheriting from Shape
  class Square extends Shape {
    // Override of the render method for Square
    render() {
      // Returns SVG markup for a square with the specified color
      return `<svg width="300" height="200"><rect x="50" y="50" width="200" height="200" fill="${this.color}" /></svg>`;
    }
  }
  
  // Export the classes to be used elsewhere in the application
  module.exports = { Triangle, Circle, Square };
  