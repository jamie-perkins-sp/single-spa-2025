import { NgZone } from '@angular/core';

import { NavigationStart, Router } from '@angular/router';

import { bootstrapApplication } from '@angular/platform-browser';
import { getSingleSpaExtraProviders, singleSpaAngular } from 'single-spa-angular';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';


const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    platformBrowserDynamic(getSingleSpaExtraProviders())
    return bootstrapApplication(AppComponent, appConfig)
      .catch((err) => console.error(err)) as any;
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
