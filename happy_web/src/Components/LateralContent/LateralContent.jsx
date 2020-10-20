import React from 'react'
import {LeftAsideContent} from './styled';
const LateralContent = ({children,width,height}) => {
  return (
    <LeftAsideContent width={width} >
      {children}
    </LeftAsideContent>
  )
}


export default LateralContent;
