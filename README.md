# dale-svg

## Description

The SVG Logo Maker is a Node.js command-line application that enables users to create a simple logo by selecting a color, shape, and entering text. The application outputs an SVG file that visually represents the user's input.

## Usage

To create your own SVG logo, follow these steps:

1. Clone the repository or download the source code to your local machine.
2. Run `npm install` to install all required dependencies.
3. Start the application by running `node index.js` in the terminal.
4. Answer the prompts in the command line to specify the logo text (up to three characters), text color, shape, and shape color.
5. Once all prompts are answered, the application will generate a `logo.svg` file in the root directory.

## Features

- Interactively create a logo through the command line.
- Customize the logo with different shapes (triangle, circle, square).
- Choose colors for both the text and the shape.
- Save the logo as an SVG file.



## Resources

- [Node.js](https://nodejs.org/)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) for command line user interface
- [Jest](https://jestjs.io/) for unit testing

## Testing

To run the Jest unit tests for the shape classes, execute:

```bash
npm test
```

## Deployed Application
The SVG Logo Maker is not deployed. To use the application, follow the [usage](#usage) instructions above.

## Screenshots
![Screenshot of the SVG Logo Maker application](./assets/images/screenshot.png)

## Acknowledgments

- **Node.js**: For the runtime environment.
- **Inquirer.js**: For the interactive command line user interface.
- **Jest**: For providing the testing framework.
- **Shields.io**: For the README badges.