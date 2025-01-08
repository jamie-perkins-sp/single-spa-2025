import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

/**
 * Below are various different ways to register apps in single-spa, leaving them commented
 * to know which ways I've tried
 */

// This way is stubbed out by the create-single-spa schematic
// Error: application 'app1' died in status LOADING_SOURCE_CODE: undefined
// registerApplication({
//   name: "app1",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "app1"
//     ),
//   activeWhen: ["/"],
// });

// This way required me to add a script tag for SystemJS
// Error: application 'app1' died in status LOADING_SOURCE_CODE: Unable to resolve bare specifier 'app1'
// registerApplication({
//   name: 'app1',
//   app: System.import('app1').then(app => {
//     console.log('app', app);
//   }),
//   activeWhen: ['/'],
// });

// Another way I found in the docs
// Error: application 'app1' died in status LOADING_SOURCE_CODE: Unable to resolve bare specifier 'app1'
registerApplication(
  "app1",
  () => System.import("app1"),
  (location) => location.pathname.startsWith("/")
);

start({
  urlRerouteOnly: true,
});
