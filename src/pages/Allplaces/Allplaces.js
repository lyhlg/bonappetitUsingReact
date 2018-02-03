import React, { Component } from 'react';

class Allplaces extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (!localStorage.token) {
      alert('Please Login');
      this.props.history.push('/');
    }

  }

  render() {
    return (
      <div>
        All
      </div>
    );
  }
}

export default Allplaces;
