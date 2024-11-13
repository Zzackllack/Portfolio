# Portfolio - React + TypeScript + Vite

This project is a personal portfolio website built with React, TypeScript, and Vite. It showcases various sections including an introduction, about me, projects, and contact information.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [Technologies Used](#technologies-used)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Zzackllack/portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

or

```sh
yarn dev
```

This will start the Vite development server and you can view the application at `http://localhost:3000`.

## Project Structure

```
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── NavBar.tsx
│   │   ├── ProjectsSection.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev`: Starts the development server.
- `npm run build` or `yarn build`: Builds the app for production.
- `npm run lint` or `yarn lint`: Runs ESLint to check for linting errors.
- `npm run preview` or `yarn preview`: Previews the production build locally.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

1. Configure the top-level `parserOptions` property like this:

   ```js
   export default tseslint.config({
     languageOptions: {
       // other options...
       parserOptions: {
         project: ["./tsconfig.node.json", "./tsconfig.app.json"],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
3. Optionally add `...tseslint.configs.stylisticTypeChecked`.
4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

   ```js
   // eslint.config.js
   import react from "eslint-plugin-react";

   export default tseslint.config({
     // Set the react version
     settings: { react: { version: "18.3" } },
     plugins: {
       // Add the react plugin
       react,
     },
     rules: {
       // other rules...
       // Enable its recommended rules
       ...react.configs.recommended.rules,
       ...react.configs["jsx-runtime"].rules,
     },
   });
   ```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Lucide React**: A collection of simply beautiful open-source icons for React.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Code Citations

- License: **MIT**
- *https://github.com/wchr-aun/resource-based-checklist-generation/tree/7f5702a3f90f0c1bf6759fbb1e5f27abcb5b26ba/frontend/src/features/ScrollToTop/ScrollToTop.tsx*

```js
scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```
