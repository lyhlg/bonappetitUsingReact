import React, { Component } from 'react';
import './PlacesEntry.css';
import Modal from '../Modal/Modal';
import './bootstrap.min.css';
import heart from '../../images/heart.png'


class PlacesEntry extends Component {
constructor(props) {
    super(props);
    this.state ={
      titleIsOpen: false,
      modalIsOpen: false
    };
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  };

  cancelModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    console.log('placesEntry Props!!!!!!', this.props);
    return (
      <div>
      <div className="bg-light">
          <div role="main" className="container">
          <div className="my-3 p-3 bg-white rounded box-shadow">
              <div className="forClick" onClick={(e) => { this.props.__likeToUnlike(e) }}>
              <span className="storeName" onClick={this.openModal.bind(this)}><strong>{this.props.i.title} </strong></span>
              <span className="menuName"> {this.props.i.menu} </span>
              <span className="price">{this.props.i.price}원  </span>
                <div className="heart"> <img src={heart} width="12px" /> {this.props.i.likes}  </div>
              <hr/>
            </div>
          <div className="media text-muted">
            <img src={this.props.i.thumbnail} height="32" width="32" alt="" className="mr-2 rounded" />
            <p className="media-body pb-3 mb-0 sselecmall lh-125 border-bottom border-gray">
                  <p><strong className="gmailAcc">@{this.props.i.gmailAccount.slice(0, this.props.i.gmailAccount.indexOf('@'))}</strong></p>
                <p className="comment"> {this.props.i.comment} </p>
                  <Modal
                    item={this.props.i}
                    show={this.state.modalIsOpen}
                    onCancel={this.cancelModal.bind(this)}>
                  </Modal>
              </p>

            </div>

          </div>
        </div>
        </div>
      </div>
    )
  }
}



// const PlacesEntry = (props) => {
//   return (
//     <div>
//         <div className="bg-light">
//           <div role="main" className="container">
//             <div className="my-3 p-3 bg-white rounded box-shadow ">
//               <span className="storeName" onClick={(e) => props._click(e)}><strong>{props.i.title}</strong> <span className="menuName">{props.i.menu} </span></span> <hr/>
//               <div className="media text-muted">
//                 <img src={props.i.thumbnail} height="32" width="32" alt="" className="mr-2 rounded" />
//                 <p className="media-body pb-3 mb-0 sselecmall lh-125 border-bottom border-gray">
//                 <p><strong className="gmailAcc">@{props.i.gmailAccount}<div className="heart" > <img src="../../images/heart.png" width="12px" /> {props.i.heartCount} </div></strong></p>
//                   <p className="comment"> {props.i.comment} </p>
//                 </p>
//               </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


export default PlacesEntry;
