# Notes

- Node.js is an enviroment to run JS outside the browser.
- Built on Chrome's V8 JS Engine.
- Use CommonJS as the modules.
- REPL, accessible via `node` command in the terminal is like the _console_ in the browser.
- Running the file via CLI using `node <file>`.

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

## 00 JS Async Recap

The **Promise** is an object that represents the eventual completion (or failure) of an async operation and it's value. The **Await** operator is used to wait for a _Promise_. It can be used with function with the **Async** keyword.

## 01 Basics

1. Var and If
2. Globals Variables
3. Modules
4. Module: Alternative Syntax
5. Direct Invoke
6. Built-in Modules: OS Module
7. Built-in Modules: Path Module
8. Built-in Modules: FS Module (Sync)
9. Built-in Modules: FS Module (Async)
   - Async is different to Sync because if the Sync can do only a single task per time. If there is a user that is user that is doing a long task all our resources are dedicated to him, but we don't want that to happen. We don't want that Node is occupied with only this task. Thanks to Async we can do multiple tasks at one time.
10. Built-in Modules: HTTP
    - Setup a web server (Basics)
    - Run `node 10/server.js`
11. Autoupdate
    - Install as a dev dependency with `npm install --save-dev nodemon`. Useful for autoload the application at every changes.
    - In package.json we have specify a `start` script that run and reload at every changes our file `11/autoload.js`. We have done this preaviously installing a dev dependancy called `nodemon`
12. Event Loop
    - What allow Node.js non-blocking I/O operations, despite JS is single-thread, by offloading opearations to the system kernel whenever possibile.
    - Examples in 12 dir
13. Async.
    - In 13 dir we can find two files. One with server with blocking code (non-async) and the other with server with async code using different methods.
