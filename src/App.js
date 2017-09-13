import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <Home />
        </MuiThemeProvider>
    );
  }
}

export default connect(null, null)(App);