import React from 'react'
import {Link} from 'react-router-dom';
import {AncorLink} from './styled';
const Button = ({to,children, size,color,hover}) => {
  return (
    <AncorLink size={size} color={color} hover={hover}>
      <Link to={to} >
        {children}
      </Link>
    </AncorLink>

  )
}

export default Button;
