import React from "react";
import "./Gallery.css";

export const GalleryModal = ({
  show,
  onClick,
  src,
}: {
  show: Boolean;
  onClick: any;
  src: any;
}) => {
  return show ? (
    <div className="modal-overlay" onClick={onClick}>
      <div className="modal-body">
        <a className="modal-close" href="#url" onClick={onClick}>
          <span className="fa fa-times"></span>
        </a>

        <img src={src} alt="" />
      </div>
    </div>
  ) : (
    <></>
  );
};

// import React, { Component } from 'react';

// export default class GalleryModal extends Component {
//     render() {

//       if (this.props.show === false) {
//         return null;
//       }

//       return(

//         <div show={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>

//           <div className='modal-body'>

//             <a className='modal-close' href='#url' onClick={this.props.onClick}>
//               <span className='fa fa-times'></span>
//             </a>

//             <img src={this.props.src} alt='' />

//           </div>

//         </div>
//       )
//     }
//   }
