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

        <img src={src} alt="" className="img"/>
      </div>
    </div>
  ) : (
    <></>
  );
};