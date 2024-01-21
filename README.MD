# Adonis Inertia MUI Template

This repository serves as a starting point for web applications built with AdonisJS, InertiaJS, and the MUI Kit Free Version. It provides a structured setup with pre-configured components for forms and routing, allowing developers to kickstart their projects seamlessly.

## Features

- **AdonisJS:** Utilizes the power of AdonisJS, a Node.js web framework, for building robust and scalable server-side applications.

- **InertiaJS:** Integrates InertiaJS to create modern, dynamic, and reactive user interfaces without compromising the productivity of server-driven development.

- **MUI Kit Free Version:** Incorporates the MUI (Material-UI) Kit Free Version to enhance the user interface with beautiful, responsive, and customizable React components.

- **Pre-configured Components:** Comes with pre-configured components for forms and routing, reducing the boilerplate code and accelerating development.

## Why

This repository serves as a robust foundation for web applications, seamlessly combining the strengths of AdonisJS, InertiaJS, and the MUI Kit Free Version. Here's why this combination is ideal for backend development and efficient data passing to the UI:

### Backend Development with AdonisJS

- **AdonisJS, a Full-Stack Framework:** AdonisJS is a full-stack, opinionated Node.js framework designed to make backend development efficient and maintainable. It provides a clear structure, powerful ORM (Object-Relational Mapping) through Lucid, and built-in features for authentication, routing, and middleware.

- **TypeScript Support:** The template is configured to leverage TypeScript, offering a statically typed environment that enhances code quality, refactoring, and collaboration among developers.

- **Scalability and Productivity:** AdonisJS promotes scalability by enabling developers to build scalable applications effortlessly. With features like dependency injection and providers, it ensures a modular and maintainable codebase. The Ace CLI simplifies common tasks, enhancing developer productivity.

### Seamless Data Passing to UI with InertiaJS

- **Reactive UIs with Server-Driven Pages:** InertiaJS allows for the creation of modern, reactive user interfaces by adopting a server-driven approach. Instead of building separate API endpoints for frontend interactions, InertiaJS leverages server-rendered pages, resulting in a seamless development experience.

- **Effortless Data Passing:** InertiaJS simplifies data passing between the backend and frontend. When interacting with the server, only the data needed for a specific page is sent, reducing unnecessary overhead. This approach results in faster response times and efficient data handling.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/kenenisa/adonis-inertia-mui-template.git
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Run the development server:

   ```bash
   yarn dev
   ```

   This will start the AdonisJS server and watch for changes, providing a smooth development experience.

4. Build for production:

   ```bash
   yarn build
   ```

   Build your application for production deployment.

## Scripts

- **`yarn dev`**: Start the development server with watch mode.
  
- **`yarn build`**: Build the application for production.

- **`yarn start`**: Start the server in production mode.

- **`yarn test`**: Run tests using the Japa test runner.

- **`yarn lint`**: Lint the TypeScript files using ESLint.

- **`yarn format`**: Format the code using Prettier.

## Dependencies

This template includes a set of dependencies for various functionalities such as authentication, database access, UI components, and more. Some key dependencies include:

- **AdonisJS Core, Lucid, Auth, View, Shield:** Essential AdonisJS packages for building web applications.

- **InertiaJS, MUI Kit, React, React Router:** Libraries for creating dynamic and responsive user interfaces.

- **Webpack, Babel, TypeScript:** Tools for bundling, transpiling, and typing the code.

For a complete list of dependencies, please refer to the `package.json` file.

## Configuration

- **ESLint and Prettier:** Configuration files are provided for linting and code formatting. Adjust rules in the `.eslintrc.json` file.

- **Webpack Encore:** Customize your asset bundling and compilation configuration in the `webpack.config.js` file.

- **AdonisJS Configuration:** Explore and modify AdonisJS configuration files in the `config/` directory.

## Routes Configuration

- **Views Definition:** Views based on `resources/js/pages/` are defined in `start/routes/views.ts`. Modify this file to customize and add new views.

- **Additional Routes:** Define other routes in `start/routes.ts` to configure additional server-side routes.

## Contributing

Feel free to contribute to this template by opening issues, proposing new features, or submitting pull requests. Your feedback and contributions are highly appreciated.

## License

This template is open-source and available under the [MIT License](LICENSE). Feel free to use it in your projects, and let us know if you find it helpful!