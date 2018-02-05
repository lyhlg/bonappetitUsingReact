import React, { Component } from 'react';
import PlacesEntry from '../PlacesEntry/PlacesEntry';
import Create from '../Create/Create';
import plus from '../../images/plus.png';
import 'whatwg-fetch';

class Allplaces extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!localStorage.token) {
      alert('Please Login');
      this.props.history.push('/');
    }
    fetch('http://localhost:8080/api/allplaces')
      .then(res => {
        return res.json();
      }).then(json => {
        localStorage.setItem('data', JSON.stringify(json));
        this.props._calledPlaceList(JSON.stringify(json));
      }).catch(err => console.error('parsing failed', err));
  }

  render() {
    console.log( " @@@",this.props);
    return (
      <div>
        <div className="plus" onClick={this.props._openTitle}> <img src={plus} width="80px" /> </div>
        {this.props.stat.placeList.map((item, k) => {
          return (<PlacesEntry i={item} __openModal={() => { this.props._openModal() }} __closeModal={() => { this.props._closeModal() }} __cancelModal={() => { this.props._cancelModal()}} _stat= {this.props.stat} __likeToUnlike = { this.props._likeToUnlike} key={k} />);
        })}
        <Create
          item={this.props.i}
          show={this.props.stat.titleIsOpen}
          onCancel={this.props._cancelTitle}>
        </Create>
      </div>
    );
  }
}

export default Allplaces;
