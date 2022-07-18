import React, { Component } from 'react';
import Main from './component/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;