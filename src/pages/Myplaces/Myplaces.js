import React, { Component } from 'react';
import PlacesEntry from '../PlacesEntry/PlacesEntry';
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
        <div className="plus"> <img src="../../images/plus.png" width="80px" /> </div>
        {
          this.props.stat.placeList.map((item, k) => {
            return (<PlacesEntry i={item} key={k} />);
          })
        }
      </div>
    );
  }
}

export default Myplaces;
