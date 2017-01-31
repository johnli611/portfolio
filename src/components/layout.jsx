import React, { Component }     from 'react';
import Gallery                  from './gallery';
import Map                      from './map';


export default class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="content-container">
        <Map />

        <div style={{marginTop: '-25px'}}>
          <Gallery />
        </div>
      </div>
    );
  }

}
