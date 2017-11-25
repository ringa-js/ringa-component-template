import React from 'react';

import {RingaComponent} from 'ringa-fw-react';

import './Home.scss';

export default class Home extends RingaComponent {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    let cn = this.calcClassnames('home');

    return <div className={cn}>Home</div>;
  }
}
