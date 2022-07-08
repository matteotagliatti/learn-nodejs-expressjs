# Notes

- Node.js is an enviroment to run JS outside the browser.
- Built on Chrome's V8 JS Engine.
- Use CommonJS as the modules.
- REPL, accessible via `node` command in the terminal is like the _console_ in the browser.
- Running the file via CLI using `node <file>`.

## JS Async Recap

A Promise is simply an object in JS. Has three states: _pending_, _fulfilled_ and _rejected_. The **Promise** is an object that represents the eventual completion (or failure) of an async operation and it's value. The **Await** operator is used to wait for a _Promise_. It can be used with function with the **Async** keyword.

## npm

In NPM there's no control, everyone can publish whatever they want. Don't download and use something with a small amount of downloads.

- `npm i <packageName>` local dependancy - use it only in this particular project
- `npm install -g <packageName>` global dependancy - use it in any project. Useful when we want to use something like a framework as the **Gatsby CLI**. Less useful than before thanks to NVM for managing our versions of NPM in our machine.
- `package.json` a manifest file that stores our info about our project
  - Manual approach, create file in the root.
  - `npm init` (step by step setup)
  - `npm init -y` (everything default)
- `npm unistall <packageName>`
  - or remove the dir in `/node_modules`, from `package.json`, delete `package-lock.json` and, at the end, run `npm install`. With this approach we reinstall all the modules from the scratch.
- `package-lock.json` is useful for managing the version of our dependancies.
- Install a package we often use `--save` because in the earlier Node versions, without this flag, the dependancy will be not saved inside the `package.json` file.

## Express

Built on top of the HTTP module of Node.js
