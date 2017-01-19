import React, { Component }       from 'react';
import Classnames                 from 'classnames';
import BackButton                 from '../javascript/icons/backButton';
import NextButton                 from '../javascript/icons/nextButton';


export default class ImageViewer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: props.countries,
      selectedImageIndex: props.selectedImageIndex
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      countries: newProps.countries,
      selectedImageIndex: newProps.selectedImageIndex
    });
  }

  render() {
    return (
      <div className="image-viewer-modal">
        <img
          src={this.selectedImage().image_url}
          alt={this.selectedImage().name}
          width="840px"
          height="560px"
        />

          <div
            className="modal-nav-button modal-back-button"
          >
            <button
              className={Classnames({'disabled': this.isFirstImage()})}
              onClick={this.props.handleBackButtonClick}
              disabled={this.isFirstImage()}
            >
              <div style={{marginTop: '3px'}}>
                <BackButton />
              </div>
            </button>
          </div>

          <div
            className="modal-nav-button modal-next-button"
          >
            <button
              className={Classnames({'disabled': this.isLastImage()})}
              onClick={this.props.handleNextButtonClick}
              disabled={this.isLastImage()}
            >
              <div style={{marginTop: '3px'}}>
                <NextButton />
              </div>
            </button>
          </div>
      </div>
    );
  }

  selectedImage() {
    return this.state.countries[this.state.selectedImageIndex];
  }

  isFirstImage() {
    return this.state.selectedImageIndex === 0;
  }

  isLastImage() {
    return this.state.selectedImageIndex === this.state.countries.length - 1;
  }

}
