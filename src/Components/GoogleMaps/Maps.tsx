import React from "react";

{/* <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1415.0843671994046!2d-58.222639285836976!3d-32.481870362801715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6bf504561d387af!2sBaco%20Fusi%C3%B3n%20Restaurant!5e0!3m2!1sen!2sar!4v1667231803931!5m2!1sen!2sar"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>; */}

function Maps() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1415.0843671994046!2d-58.222639285836976!3d-32.481870362801715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6bf504561d387af!2sBaco%20Fusi%C3%B3n%20Restaurant!5e0!3m2!1sen!2sar!4v1667231803931!5m2!1sen!2sar"
        width="600"
        height="450"
        style={{ border: "0px" }}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      ;
    </div>
  );
}

export default Maps;
