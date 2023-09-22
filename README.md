### 🔧 Technology Stack

- VanillaJS (modules, classes)
- Webpack

# Hangman Game 💀⚰️

Features:
- getting info about every convicted from Random User API (https://randomuser.me/)
- save progress of game in local storage
- wallet, earn coins and buy boosters from shop
- shop with boosters
- turn on/off sound
- cemetery/town (store), you can see info about executed/survivor convicted

Good luck and have fun!
<br />
<br />
<br />
**🔗🎮 GAME: [http://jacekcv.com/projects/hangman/](http://projekty.jacekcv.com/hangman/)**
<br />
**🌐 My website: http://jacekcv.com/**
<br />
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
    category: CATEGORIES.FILMS  // how to add own categories property below
  },
  // ... other solutions ...
]
```
It's all! Your new solution has been added.

<br />

### ➕ Add new category
Open file `src/js/data/solutions.js` and add new property to `CATEGORIES` object.
```javascript
export const CATEGORIES = {
  NAME_OF_CATEGORY: 'Name of category',
  // ... other categories ...
}
```
It's all! Your new category has been added. You can use it in `SOLUTIONS` array.

<br />

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
More documentation `webpack-dev-server`: https://webpack.js.org/configuration/dev-server/

### Build
To build your project to production/distribution version use command
```sh
npm run dist
```
This command generates `dist` folder. You can upload the files from this folder to FTP server.

