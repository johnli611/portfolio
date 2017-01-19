import React, { Component }       from 'react';
import _                          from 'underscore';
import EXIF                       from 'exif-js';
import Modal                      from '../javascript/services/modal';
import ImageViewer                from './imageViewer';


const countries = [
  {
    name: 'Portugal',
    dateText: 'November 2016',
    image_url: 'http://i.imgur.com/8ZIBrQF.jpg'
  },
  {
    name: 'Argentina',
    dateText: 'June 2014',
    image_url: 'http://i.imgur.com/X78Zrvx.jpg'
  },
  {
    name: 'Morocco',
    dateText: 'January 2015',
    image_url: 'http://i.imgur.com/pKsBpL5.jpg'
  },
  {
    name: 'Italy',
    dateText: 'August 2014',
    image_url: 'http://i.imgur.com/jttSdI6.jpg'
  },
  {
    name: 'Brazil',
    dateText: 'June 2014',
    image_url: 'http://i.imgur.com/QoLsg3u.jpg'
  },
  {
    name: 'Thailand',
    dateText: 'January 2014',
    image_url: 'http://i.imgur.com/WLYwy9C.jpg'
  },
  {
    name: 'France',
    dateText: 'July 2014',
    image_url: 'http://i.imgur.com/UsXMBJS.jpg'
  },
  {
    name: 'Switzerland',
    dateText: 'August 2014',
    image_url: 'http://i.imgur.com/ydvKuyn.jpg'
  },
  {
    name: 'Cambodia',
    dateText: 'January 2014',
    image_url: 'http://i.imgur.com/v2MUc8x.jpg'
  },
  {
    name: 'Spain',
    dateText: 'January 2015',
    image_url: 'http://i.imgur.com/WFs9YWP.jpg'
  },
  {
    name: 'Taiwan',
    dateText: 'January 2014',
    image_url: 'http://i.imgur.com/iEgbrQI.jpg'
  },
  {
    name: 'Peru',
    dateText: 'June 2013',
    image_url: 'http://i.imgur.com/3morZoJ.jpg'
  },
  {
    name: 'Mexico',
    dateText: 'June 2013',
    image_url: 'http://i.imgur.com/3jRLGyB.jpg'
  },
  {
    name: 'Liechtenstein',
    dateText: 'August 2014',
    image_url: 'http://i.imgur.com/4zBO1qi.jpg'
  },
  {
    name: 'Slovenia',
    dateText: 'August 2014',
    image_url: 'http://i.imgur.com/9ITzU8Y.jpg'
  },
  {
    name: 'Hungary',
    dateText: 'August 2014',
    image_url: 'http://i.imgur.com/k5065m2.jpg'
  },
  {
    name: 'Austria',
    dateText: 'August 2014',
    image_url: 'http://i.imgur.com/ViKpzQj.jpg'
  },
  {
    name: 'Croatia',
    dateText: 'August 2014',
    image_url: 'http://i.imgur.com/jmKOOLR.jpg'
  },
  {
    name: 'Czech Republic',
    dateText: 'August 2014',
    image_url: 'http://i.imgur.com/lYJrXMm.jpg'
  },
  {
    name: 'Vietnam',
    dateText: 'January 2014',
    image_url: 'http://i.imgur.com/w5eKdXG.jpg'
  },
  {
    name: 'Singapore',
    dateText: 'January 2014',
    image_url: 'http://i.imgur.com/xal3NAH.jpg'
  }
];

export default class Gallery extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shouldShowModal: false,
      selectedImageIndex: null
    };

    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
  }

  render() {
    return (
      <div>
        {this.renderGalleryItems()}

        {this.state.shouldShowModal ? (
          <Modal
            showModal={this.state.shouldShowModal}
            showCloseButton={true}
            onCloseCallback={this.handleModalClose}
          >
            <ImageViewer
              handleBackButtonClick={this.handleBackButtonClick}
              handleNextButtonClick={this.handleNextButtonClick}
              selectedImageIndex={this.state.selectedImageIndex}
              countries={countries}
            />
          </Modal>
        ) : null}
      </div>
    );
  }

  handleBackButtonClick() {
    this.setState({
      selectedImageIndex: this.state.selectedImageIndex - 1
    });
  }

  handleNextButtonClick() {
    this.setState({
      selectedImageIndex: this.state.selectedImageIndex + 1
    });
  }

  renderGalleryItems() {
    return countries.map((country, index) => {
      return (
        <div
          className="gallery-item"
          onClick={() => this.setSelectedImage(index)}
        >
          {this.renderGalleryImage(country.image_url)}

          <div className="gallery-item-overlay">
            {/*
             <h1>
              {country.name}
             </h1>

             <h4>
              {country.dateText}
             </h4>
            */}
          </div>
        </div>
      );
    });
  }

  renderGalleryImage(url) {
    return <img src={url}/>;
  }

  handleModalClose() {
    this.setState({
      shouldShowModal: false,
      selectedImageIndex: null
    });
  }

  setSelectedImage(index) {
    this.setState({
      shouldShowModal: true,
      selectedImageIndex: index
    });
  }
}
