import React from "react";
import "./Gallery.css";

export const GalleryModal = ({
  show,
  onClick,
  src,
  id
}: {
  show: Boolean;
  onClick: any;
  src: string;
  id: string
}) => {
  return show ? (
    <div className="modal-overlay" onClick={onClick}>
      <div className="modal-body" id={id}>
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
