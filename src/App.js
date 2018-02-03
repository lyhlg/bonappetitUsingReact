import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: ' '
    }
  }

  _click() {
    console.log('clicked!');
    this.setState({
      name: 'yonghyun'
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this._click.bind(this)}> Click!! </button>
          <h1>helloo!add~!!! {this.state.name} </h1>
      </div>
    );
  }
}

export default App;
