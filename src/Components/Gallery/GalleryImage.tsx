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