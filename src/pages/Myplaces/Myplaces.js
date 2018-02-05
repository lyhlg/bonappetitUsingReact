import React, { Component } from 'react';
import PlacesEntry from '../PlacesEntry/PlacesEntry';
import Create from '../Create/Create';
// import path from 'path';
import plus from '../../images/plus.png'
import 'whatwg-fetch';

class Myplaces extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    if (!localStorage.token) {
      alert('Please Login');
      this.props.history.replace('/');
    }
    fetch(`http://localhost:8080/api/myplaces?token=${localStorage.token}`)
      .then(res => {
        return res.json();
      }).then(json => {
        this.props._calledPlaceList(JSON.stringify(json))
      }).catch(err => console.error('parsing failed', err))
  }

  render() {
    return (
      <div>
        <div className="plus" onClick={this.props._openTitle}> <img src={plus} width="80px" /> </div>
        {
          this.props.stat.placeList.map((item, k) => {
            return (<PlacesEntry i={item} __openModal={() => { this.props._openModal() }} __closeModal={() => { this.props._closeModal() }} __cancelModal={() => { this.props._cancelModal() }} _stat={this.props.stat} __likeToUnlike={this.props._likeToUnlike} key={k} />);
          })
        }
      <Create
        item={this.props.i}
        show={this.props.stat.titleIsOpen}
        onCancel={this.props._cancelTitle}>
      </Create>
      </div>
    );
  }
}

export default Myplaces;
