/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import Master from './components/Master';
import Home from './components/Home';
import CreateTenant from './components/CreateTenant';
import DisplayTenant from './components/DisplayTenant';
import UpdateTenant from './components/UpdateTenant';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Master} >
          <Route path="/add-item" component={CreateTenant} />
          <Route path="/display-item" component={DisplayTenant} />
          <Route path="/edit/:id" component={UpdateTenant} />
        </Route>
      </Router>,
          document.getElementById('pg-app'));