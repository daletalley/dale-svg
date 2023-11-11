// shapes.test.js

// Import the shape classes for testing
const { Triangle, Circle, Square } = require('./shapes');

// Describe block defines a test suite for the Shapes
describe('Shapes', () => {
  // Individual test case for rendering a blue triangle
  it('renders a blue triangle', () => {
    // Create an instance of Triangle with the color blue
    const triangle = new Triangle('blue');
    // Assert that the rendered SVG for the triangle contains a '<polygon' tag
    expect(triangle.render()).toContain('<polygon');
    // Assert that the rendered SVG for the triangle has the correct fill color
    expect(triangle.render()).toContain('fill="blue"');
  });


  it('renders a red circle', () => {
    const circle = new Circle('red');
    expect(circle.render()).toContain('<circle');
    expect(circle.render()).toContain('fill="red"');
  });


  it('renders a green square', () => {
    const square = new Square('green');
    expect(square.render()).toContain('<rect');
    expect(square.render()).toContain('fill="green"');
  });
});
