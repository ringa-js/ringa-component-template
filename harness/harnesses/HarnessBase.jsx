import React, { Component } from 'react';

import {RingaComponent, I18NModel} from 'ringa-fw-react';

import {dependency} from 'react-ringa';

import './HarnessBase.scss';

export default class HarnessBase extends RingaComponent {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    this.depend(dependency(I18NModel, 'language'));
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return <div className={this.calcClassnames('harness-container')}>{this.props.children}</div>;
  }
}
