import React, { Component }   from 'react';
import TopNavBar              from './components/topNavBar';
import Layout                 from './components/layout';

require('./stylesheets/portfolio.scss');


export default class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar />

        <Layout />
      </div>
    );
  }
}
