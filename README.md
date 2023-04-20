# Getting Started with Create React App

## Tech stack

- ⚛️ Declarative Components in [React](https://reactjs.org/).

- 💅 [Styled Components](https://styled-components.com/) for the global styles control of the Desing System (components) and the ui.

- ✅ Unit testing with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for the assertions.

## Installation

### Clone repository

```bash
git clone https://github.com/DavidPegueroles/improfit-dice-game-package-david-pegueroles.git
```

### Install dependencies

To install all dependencies. From the root project run

```bash
npm i
```

### Run the app

In order to run the app, you must run the following script:

```bash
npm start
```

This command will run a [local server](http://localhost:3000) at port 3000 if available.

## How to use the npm package

Follow these steps to use the npm package you've created:

### Step 1: Install Node.js and npm

Make sure you have Node.js and npm installed on your system. If you don't, download it from the official website: [https://nodejs.org/](https://nodejs.org/)

### Step 2: Navigate to your project folder

Open the terminal and navigate to the project folder where you want to use the package.

### Step 3: Install the package

Install the package by running the following command:

```bash
npm install dice-game-david-pegueroles
```

## Step 5: Import and use the package into your project

Now that you have imported the `Game` component from the package, you can use it in your project. Depending on the framework or library you are using, the way you incorporate the component might vary. Here's an example of how to use the `Game` component in a React application:

```javascript
import React from "react";
import { Game } from "dice-game-david-pegueroles";

function App() {
  return (
    <div className="App">
      <h1>My Dice Game</h1>
      <Game />
    </div>
  );
}

export default App;
```
