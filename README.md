### 🔧 Technology Stack

- VanillaJS (modules, classes)
- Webpack

# Hangman Game 💀⚰️

Game created in VanillaJS, using ES6, classes and modules. The goal of the game is find a solution by guessing letters. If you win you will get a money and you will save a convicted, but when you lose you will kill him and you will be able to find his grave on cemetery. When you have enought money you can enter the boosters shop and buy one of them. This will make your game easier!
Good luck and have fun!

**🔗🎮 GAME: http://jacekcv.com/projects/hangman/**
<br />
**🌐 My website: http://jacekcv.com/**
<br />
**❗️❤️ THANKS FOR PLAYING MY GAME ❤️❗️**

<br />
<br />
<br />

# 📄 Documentation

### ➕ Add new solution
Open file `src/js/data/solutions.js` and add new object to `SOLUTIONS` array.
```javascript
export const SOLUTIONS = [
  {
    text: "Text of solution",
    category: CATEGORIES.FILMS
  },
  // ... other solutions ...
]
```
It's all! Your new solution has been added.

```javascript

```

### ➕ Add new category
Open file `src/js/data/solutions.js` and add new property to `CATEGORIES` object.
```javascript
export const CATEGORIES = {
  NAME_OF_CATEGORY: 'Name of category',
  // ... other categories ...
}
```
It's all! Your new category has been added. You can use it in `SOLUTIONS` array.


## ⚙️ Webpack

Installed dependencies:
- @babel/core
- @babel/plugin-proposal-class-properties
- @babel/preset-env
- babel-loader
- clean-webpack-plugin
- copy-webpack-plugin
- css-loader
- file-loader
- html-webpack-plugin
- mini-css-extract-plugin
- node-sass
- sass-loader
- style-loader
- webpack
- webpack-cli
- webpack-dev-server

### Live server
To run dev-server use command
```sh
npm run start
```
More documentation `webpack-dev-server`: https://webpack.js.org/configuration/dev-server/**

### Build
To build your project to production/distribution version use command
```sh
npm run dist
```
This command generates `dist` folder. You can upload the files from this folder to FTP server.

