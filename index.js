// index.js

// Main function that orchestrates the logo creation process
async function main() {
    // Dynamically import the inquirer module for command line prompts
    const inquirerModule = await import('inquirer');
    // Extract the prompt method from the imported module
    const prompt = inquirerModule.default.prompt;
  
    // Use prompt to gather user inputs for the logo
    const answers = await prompt([
      // Prompt for text input for the logo
      {
        type: 'input',
        name: 'text',
        message: 'What text do you want in the logo (up to 3 characters)?',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters long.',
        default: 'SVG'
      },
      // Prompt to select the shape of the logo
      {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want for your logo?',
        choices: ['Triangle', 'Circle', 'Square'],
        default: 'Triangle'
      },
      // Prompt for the color of the text in the logo
      {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want for the text?',
        default: 'white'
      },
      // Prompt for the color of the shape in the logo
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want for the shape?',
        default: 'black'
      }
    ]);
  
    // Destructure the answers to use in the SVG creation
    const { text, shape, textColor, shapeColor } = answers;
    let svgContent; // Will hold the final SVG content
  
    // Style block for the SVG - ensures text is styled correctly
    const style = `
    <style>
      text {
        font-family: 'Arial', sans-serif;
        dominant-baseline: middle;
        text-anchor: middle;
      }
    </style>
    `;
  
    // Switch statement to set svgContent based on chosen shape
    switch (shape.toLowerCase()) {
      case 'triangle':
        // SVG string for a triangle
        svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${style}<polygon points="150,10 250,190 50,190" fill="${shapeColor}" /><text x="150" y="100" font-size="40" fill="${textColor}">${text}</text></svg>`;
        break;
      case 'circle':
        // SVG string for a circle
        svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${style}<circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="100" font-size="40" fill="${textColor}">${text}</text></svg>`;
        break;
      case 'square':
        // SVG string for a square
        svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${style}<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" /><text x="150" y="100" font-size="40" fill="${textColor}">${text}</text></svg>`;
        break;
      default:
        // Error case for unknown shape
        console.error('Unknown shape type');
        return;
    }

  // Use Node's built-in 'fs' module to write the SVG content to a file
  const fs = (await import('fs')).promises;
  try {
    // Write the SVG content to logo.svg
    await fs.writeFile('logo.svg', svgContent);
    console.log(' Your logo has been crafted and saved as logo.svg!');
  } catch (err) {
    // Catch and log any errors in the process
    console.error('Error writing SVG to file:', err);
  }
}

// Invoke the main function to run the script
main();
// Run the script with node index.js
