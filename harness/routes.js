/* eslint-disable no-console */
import React from 'react';
import { Route } from 'react-router';

import ApplicationLayout from './layout/ApplicationLayout';

export const routeMap = {
  'Home': '/',
  'MyComponent': '/myComponent'
};

const _routeMapInverted = {};

for (let key in routeMap) {
  _routeMapInverted[routeMap[key]] = key;
}

export const routeMapInverted = _routeMapInverted;

export default (
  <Route path="/" component={ApplicationLayout} />
);

/* eslint-enable no-console */
