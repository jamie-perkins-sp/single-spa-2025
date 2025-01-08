# Single-spa angular demo

This is a single-spa with angular demo app. It contains 3 separate apps:

- root-html-file: just an index.html file and package.json with a script to serve it
- single-spa: app shell created with create-single-spa
- ng-home: an angular 17 app

There are 2 ways to run it, but before doing the following steps you will need to run `npm install` in each of the above folders.

## Root html file

Uses a root html file taken from the [coexisting angular microfrontends](https://github.com/joeldenning/coexisting-angular-microfrontends/) repo.

1. In terminal 1, run `cd root-html-file` then `npm start`
2. In terminal 2, run `cd ng-home` then `npm run serve:single-spa`

Open your browser to http://localhost:4200/

## Single-spa

Uses a shell created with `npx create-single-spa`. Currently not working.

1. In terminal 1, run `cd single-spa` then `npm start`
2. In terminal 2, run `cd ng-home` then `npm run serve:single-spa`

Open your browser to http://localhost:9000/
