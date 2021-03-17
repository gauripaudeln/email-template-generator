import React from 'react';
import headerImage from '../images/wellness.jpg';
import Img from '../tags/Image'

function Header(props) {
    return  <Img src={headerImage} alt="wellness"   />;
}

export default Header;