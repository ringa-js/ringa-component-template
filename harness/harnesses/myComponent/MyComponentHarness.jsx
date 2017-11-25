import React from 'react';

import HarnessBase from '../HarnessBase';

import MyComponent from '../../../src/MyComponent';

import './MyComponentHarness.scss';

export default class MyComponentHarness extends HarnessBase {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor() {
    super();
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return <div className="harness-wrapper">
      <MyComponent/>
    </div>;
  }
}
