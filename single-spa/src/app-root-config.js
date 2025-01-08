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

// registerApplication({
//   name: "ng-home",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "ng-home"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: '@app/ng-home-root',
  app: System.import('@app/ng-home-root').then(app => {
    console.log('app', app);
  }),
  activeWhen: ['/'],
});

// registerApplication(
//   "ng-home",
//   () => System.import("ng-home"),
//   (location) => location.pathname.startsWith("/")
// );

start({
  urlRerouteOnly: true,
});
