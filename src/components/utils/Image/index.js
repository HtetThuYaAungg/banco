import React from "react";

function Image({ src, alt, ...rest }) {
  return <img src={src} alt={alt} {...rest} />;
}

export default Image;
