# Pixi.js Project #

A generic frontend **Pixi.js v6** project boiler plate in **TypeScript** using **Webpack**.

Main features:

* Source Map support
* Incremental Build
* Unit tests
* Browser Hot Reload


Main dependencies:

* **Application Server**: [Node](https://nodejs.org/en/)
* **Compiler**: [TypeScript](https://github.com/Microsoft/TypeScript)
* **Bundler**: [Webpack](https://github.com/webpack/webpack)
* **Unit Test Runner**: [Mocha](https://github.com/mochajs/mocha)
* **Pixi.js**: [Pixi.js](http://www.pixijs.com/)


## Versions ##

* **Pixi.js**: 6.3.2
* **Webpack**: 5.72.1
* **Mocha**: 8.0.0
* **Typescript** 4.6.4

## Installation ##

Node, TypeScript and TSLint should be installed globally.

You can replace `yarn` with `npm` if you prefer npm.

	$> git clone https://github.com/yahiko00/PixiProject.git <new folder>
	$> cd <new folder>
	$> git init
	$> yarn install


## Build ##

Commands should be run under a **bash** shell.

The following command builds and run the project in development mode with Hot Reload.

	$> yarn run serve

The following command builds the project in production mode.

	$> yarn run build


For more predefined commands, see `package.json`, item `scripts`.

## Contributors ##

* orneo1212
* yahiko


## Licence ##

MIT
