import React from 'react'
import {AncorLink} from './styled';
const Button = ({to,children, width,height,color,hover}) => {
  return <AncorLink to={to} width={width} height={height} color={color} hover={hover}>{children} </AncorLink>

}

export default Button;
