import React, { Component }     from 'react';
import Gallery                  from './gallery';


export default class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="content-container">
        <Gallery />
      </div>
    );
  }

}
