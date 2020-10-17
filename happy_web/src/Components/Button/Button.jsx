import React from 'react'
import {Link} from 'react-router-dom';
import {AncorLink} from './styled';
const Button = ({to,children}) => {
  return (
    <AncorLink>
      <Link to={to}>
        {children}
      </Link>
    </AncorLink>

  )
}

export default Button;
