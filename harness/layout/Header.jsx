import React from 'react';

import {Dropdown,
        RingaComponent,
        ScreenModel} from 'ringa-fw-react';

import {alphaSortKey} from 'ringa-fw-core';
import {dependency} from 'react-ringa';

import {routeMap} from '../routes';

import './Header.scss';

export default class Header extends RingaComponent {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    this.depend(dependency(ScreenModel, 'curBreakpointIx'));
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render(props) {
    const {location} = this.props;
    const {curBreakpointIx} = this.state;

    const options = [];

    let selectedItem;
    for (let key in routeMap) {
      let o = {
        value: routeMap[key],
        label: key
      };

      if (o.value == location.pathname) {
        selectedItem = o;
      }

      options.push(o);
    }

    options.sort(alphaSortKey('label'));

    return <header className={this.calcClassnames('app-header', 'ringa-container-1')}>
        <div className="header-inner">
          <div className="flex-start">
            <div className="title" onClick={this.logo_onClickHandler}>
              {curBreakpointIx > 2 ? <div className="subtitle">My Component Harness</div> : undefined}
            </div>
          </div>
          <div className="links flex-end">
            {curBreakpointIx > 2 ? <a href="/">Home</a> : undefined}
            {curBreakpointIx > 2 ? <a href="http://wherever.com">Full Documentation</a> : undefined}
            {curBreakpointIx > 2 ? <a href="http://wherever.com">Github</a> : undefined}

            <Dropdown items={options}
                      align="right"
                      shift="right"
                      onChange={this.links_changeHandler}
                      value={selectedItem} />
          </div>
        </div>
      </header>;
  }

  //-----------------------------------
  // Events
  //-----------------------------------
  links_changeHandler(route) {
    this.props.history.push(route.value);
  }

  logo_onClickHandler(route) {
    this.props.history.push('/');
  }
}
