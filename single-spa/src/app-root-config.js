import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@app/navbar",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "@app/navbar"
//     ),
//   activeWhen: ["/"],
// });

registerApplication(
  "ng-home",
  () => System.import("ng-home"),
  (location) => location.pathname.startsWith("/")
);

start({
  urlRerouteOnly: true,
});
