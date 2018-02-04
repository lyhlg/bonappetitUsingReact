import React, { Component } from 'react';
import './PlacesEntry.css';
import './bootstrap.min.css';

const PlacesEntry = (props) => {
  return (
    <div>
        <div className="bg-light">
          <div role="main" className="container">
            <div className="my-3 p-3 bg-white rounded box-shadow ">
              <span className="storeName" onClick={(e) => props._click(e)}><strong>{props.i.title}</strong> <span className="menuName">{props.i.menu} </span></span> <hr/>
              <div className="media text-muted">
                <img src={props.i.thumbnail} height="32" width="32" alt="" className="mr-2 rounded" />
                <p className="media-body pb-3 mb-0 sselecmall lh-125 border-bottom border-gray">
                <p><strong className="gmailAcc">@{props.i.gmailAccount}<div className="heart" > <img src="../../images/heart.png" width="12px" /> {props.i.heartCount} </div></strong></p>
                  <p className="comment"> {props.i.comment} </p>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default PlacesEntry;
