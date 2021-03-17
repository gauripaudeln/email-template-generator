import React from 'react';

const style = {

  img: {
    outline: 'none',
    textDecoration: 'none',
    border: 'none',
    width:'100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

};

function Img(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ ...style.img, ...props.style }}
    />
  );
}

export default Img;
