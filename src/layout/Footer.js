import React from 'react';

const style ={
    p:  {
        backgroundColor:"#ee4c50",
        padding:"30px 30px",
        margin:'0px',
   
    }
}; 
function Footer(props) {
    return  <p style={{ ...style.p, ...props.style }}>Footer.... </p>
}

export default Footer;