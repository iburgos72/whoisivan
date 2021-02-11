import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

import _ from './css/styles.scss'

//const title = 'React with Webpack and Babel';

ReactDOM.render(
  <div className="container">
    <Header />
  </div>,
  document.getElementById('app')
);

module.hot.accept();
