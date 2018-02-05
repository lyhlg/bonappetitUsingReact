import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    let url = `https://www.google.com/maps/embed/v1/place?q=${encodeURI(this.props.item.title)}&key=AIzaSyC_7BK4tZRXj7zIQzsO628-ILUo39k3ScU&language=kr`
    return (
      <div>
      <div className="modalStyle" onClick={this.props.onCancel} />
        <div className="backdrop">
          <div className="googleMaps">
            <iframe src={url} width="600" height="300" frameborder="0" allowfullscreen="allowfullscreen"/>
          </div>
        </div>
      </div>
    );
  };
}
export default Modal;
