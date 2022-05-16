# Notes

- Node.js is an enviroment to run JS outside the browser.
- Built on Chrome's V8 JS Engine.
- Use CommonJS as the modules.
- REPL, accessible via `node` command in the terminal is like the _console_ in the browser.
- Running the file via CLI using `node <file>`.

## npm

In NPM there's no control, everyone can publish whatever they want. Don't download and use something with a small amount of downloads.

- `npm i <packageName>` local dependancy - use it only in this particular project
- `npm install -g <packageName>` global dependancy - use it in any project. Less useful than before thanks to NVM for managing our versions of NPM in our machine.
- `package.json` a manifest file that stores our info about our project
  - Manual approach, create file in the root.
  - `npm init` (step by step setup)
  - `npm init -y` (everything default)

# Nodedom

Install as a dev dependency with `npm install --save-dev nodemon`. Useful for autoload the application at every changes.
