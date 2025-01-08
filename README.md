# Single-spa angular demo

This is a single-spa with angular demo app. There are 2 ways to run it:

## Root html file

Uses a root html file taken from the [coexisting angular microfrontends](https://github.com/joeldenning/coexisting-angular-microfrontends/) repo.

1. In terminal 1, run `cd root-html-file` then `npm start`
2. In terminal 2, run `cd ng-home` then `npm run serve:single-spa`

Open your browser to http://localhost:4200/

## Single-spa

Uses a shell created with `npx create-single-spa`

1. In terminal 1, run `cd single-spa` then `npm start`
2. In terminal 2, run `cd ng-home` then `npm run serve:single-spa`

Open your browser to http://localhost:9000/