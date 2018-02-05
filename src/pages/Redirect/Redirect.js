import React, { Component } from 'react';

class Redirect extends Component {
        componentDidMount(){
                this.props.history.push('/Allplaces');
        }
        render() {
                return (
                        <div>
                        {alert('Title은 중복 되어서는 안됩니다.')}
                        </div>
                );
        }
}

export default Redirect;
