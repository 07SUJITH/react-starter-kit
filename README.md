# React Starter Kit

A minimal React starter kit with ESLint, Prettier, auto-sorting of imports, Tailwind CSS. Clone, install, and start building instantly without worrying about package configurations or setups. 🚀

## 🛠️ Getting Started

### Clone and Install

1. Clone the repository:

    ```sh
    git clone https://github.com/07SUJITH/react-starter-kit.git
    ```

2. Navigate into the project directory:

    ```sh
    cd react-starter-kit
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

### Update Dependencies

To update all dependencies in a single step before starting to build, run:

```sh
npx npm-check-updates -u
npm install
```

## 📂 Project Structure

```plaintext
├── .eslintrc.cjs
├── .git
├── index.html
├── LICENSE
├── node_modules
├── package.json
├── package-lock.json
├── postcss.config.js
├── .prettierignore
├── .prettierrc.json
├── public
├── README.md
├── src
├── tailwind.config.js
├── vite.config.js
└── .vscode
```

## 📦 Dependencies

### Core Dependencies

-   **React**: `^18.3.1`
-   **React-DOM**: `^18.3.1`
-   **React Icons**: `^5.2.1`
-   **React Router**: `^6.24.0`
-   **Framer Motion**: `^11.2.12`

### Development Dependencies

-   **@types/react**: `^18.3.3`
-   **@types/react-dom**: `^18.3.0`
-   **@vitejs/plugin-react**: `^4.3.1`
-   **autoprefixer**: `^10.4.19`
-   **eslint**: `^8.57.0`
-   **eslint-plugin-react**: `^7.34.2`
-   **eslint-plugin-react-hooks**: `^4.6.2`
-   **eslint-plugin-react-refresh**: `^0.4.7`
-   **eslint-plugin-simple-import-sort**: `^12.1.0`
-   **postcss**: `^8.4.38`
-   **prettier**: `3.3.2`
-   **tailwindcss**: `^3.4.4`
-   **vite**: `^5.3.1`

## 🖌️ Prettier Setup Guide

1. Create a `.prettierrc.json` file and add some Prettier rules:

    ```json
    {
        "trailingComma": "es5",
        "tabWidth": 4,
        "semi": false,
        "singleQuote": true
    }
    ```

2. Create a `.prettierignore` file and add the following:

    ```plaintext
    node_modules
    # Ignore artifacts:
    build
    coverage
    ```

3. Execute Prettier with auto-fix in a file:

    ```sh
    npx prettier --write <targetFile>
    ```

4. Create a `.vscode` folder in the root of the project.

5. Create a `settings.json` file inside the `.vscode` folder and insert the following code:

    ```json
    {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    }
    ```

6. Install the Prettier VSCode extension (so you can run it using some shortcuts, etc).

Now, every file saved will be formatted with the Prettier formatting rules. 🎉

## ✨ ESLint Setup Guide

ESLint with auto import sort is added and configured in the `.eslintrc.cjs` file.

1. Run ESLint with Fix:

    ```sh
    npx eslint . --fix
    ```

2. To run it automatically on save, follow these steps:

    - Open `settings.json` in the VSCode configuration settings.
    - Add the following line:
        ```json
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
        ```

## 📜 Scripts

Here are the npm scripts available in this project:

-   **Start Development Server**: `npm run dev`
-   **Build for Production**: `npm run build`
-   **Preview Production Build**: `npm run preview`
-   **Lint**: `npm run lint`

---

Happy coding! 🚀
