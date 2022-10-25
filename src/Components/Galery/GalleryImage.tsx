import React from "react";
import "./Gallery.css";

export const GalleryImage = ({
  className,
  src,
  alt,
}: {
  className: string;
  src: any;
  alt: string;
}) => {
  return <img className={className} src={src} alt={alt} />;
};

// import React, { Component } from 'react';

// export default class GalleryImage extends Component {

//     render() {
//         return (

//                 <img className={this.props.className} src={this.props.src} alt={this.props.alt} />

//         )
//     }
// }
