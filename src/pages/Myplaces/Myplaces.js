import React, { Component } from 'react';
import PlacesEntry from '../PlacesEntry/PlacesEntry';
import Create from '../Create/Create';
// import path from 'path';
import plus from '../../images/plus.png'
import 'whatwg-fetch';

class Myplaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleIsOpen: false,
    };
    this.openTitle = this.openTitle.bind(this);
    this.cancelTitle = this.cancelTitle.bind(this);
  }
  openTitle() {
    this.setState({
      titleIsOpen: true
    });
  };

  cancelTitle() {
    this.setState({
      titleIsOpen: false
    });
  };

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
        <div className="plus" onClick={this.openTitle}> <img src={plus} width="80px" /> </div>
        {
          this.props.stat.placeList.map((item, k) => {
            return (<PlacesEntry i={item} key={k} />);
          })
        }
      <Create
        item={this.props.i}
        show={this.state.titleIsOpen}
        onCancel={this.cancelTitle}>
      </Create>
      </div>
    );
  }
}

export default Myplaces;
