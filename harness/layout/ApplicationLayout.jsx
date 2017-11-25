import React from 'react';

import './ApplicationLayout.scss';

import Header from './Header';
import Footer from './Footer';
import AppController from '../controllers/AppController';

import {Route} from 'react-router-dom';

import Home from '../Home';

import MyComponentHarness from '../harnesses/myComponent/MyComponentHarness';

import {DefaultApplicationRoot} from 'ringa-fw-react';

import {setup as setupI18N} from '../i18n.js';

export default class ApplicationLayout extends DefaultApplicationRoot {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    setupI18N(this.i18NModel);

    this.attach(new AppController());
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return super.render(<div className="fill">
      <Header {...this.props} />
      <Route exact path="/" component={Home} />
      <Route path="/myComponent" component={MyComponentHarness} />
      <Footer />
    </div>);
  }
}
