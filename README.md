# Single-spa angular demo

This is a single-spa with angular demo app. It contains 3 separate app shells and an angular app:

- root-html-file: just an index.html file and package.json with a script to serve it
- single-spa: app shell created with create-single-spa
- single-spa-layout: app shell create with create-single-spa opting in to layout
- ng-home: an angular 17 app

There are 3 ways to run it, but before doing the following steps you will need to run `npm install` in each of the above folders.

All 3 ways use the angular microfrontend, so first, run the angular app:
1. `cd ng-home` 
2. `npm run serve:single-spa` - serves at localhost:4300

## Root html file ✅

Uses a root html file taken from the [coexisting angular microfrontends](https://github.com/joeldenning/coexisting-angular-microfrontends/) repo.

1. In a separaate terminal, run `cd root-html-file` then `npm start`
2. Open your browser to http://localhost:4200/

## Single-spa ❌

Uses a shell created with `npx create-single-spa` _without_ layout. Currently not working.

1. In a separate terminal, run `cd single-spa` then `npm start`
2. Open your browser to http://localhost:9000/

Currently fails with:

> Error: application 'app1' died in status LOADING_SOURCE_CODE: Unable to resolve bare specifier 'app1'

## Single-spa layout ❌

Uses a shell created with `npx create-single-spa` _opting in_to layout. Currently not working.

1. In a separate terminal, run `cd single-spa-layout` then `npm start`
2. Open your browser to http://localhost:9000/

Currently fails with:

> ERROR application 'app1' died in status LOADING_SOURCE_CODE: undefined

Note: The single-spa app does not recompile for file changes so it needs to be restarted on every change.