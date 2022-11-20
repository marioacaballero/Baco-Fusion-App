import React, { useState } from "react";
import { GalleryImage } from "./GalleryImage";
import { GalleryModal } from "./GalleryModal";
import "./Gallery.css";
import { galleryImgs } from "../../Assets/Data";

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState({
    isOpen: false,
    url: "",
  });

  // Function for opening modal dialog
  const openModal = (url: any) => {
    setIsOpen({
      isOpen: true,
      url: url,
    });
    window.location.assign("/gallery/#top");
  };

  // Function for closing modal dialog
  const closeModal = () => {
    setIsOpen({
      isOpen: false,
      url: "",
    });
  };

  return (
    <div className="gallery-container">
      <div className="row">
        {galleryImgs.map((url, index) => {
          return (
            <div key={index} className="col-sm-6 col-md-3 col-xl-2">
              <div className="gallery-card">
                <GalleryImage
                  className="gallery-thumbnail"
                  src={url}
                  alt={"Image number " + (index + 1)}
                />

                <span
                  className="card-icon-open fa fa-expand-arrows-alt"
                  onClick={() => openModal(url)}
                ></span>
              </div>
            </div>
          );
        })}
      </div>

      {isOpen.isOpen ? (
        <GalleryModal
          show={isOpen.isOpen}
          onClick={closeModal}
          src={isOpen.url}
          id={"top"}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

// https://github.com/felipefcor/Image-gallery-with-React
