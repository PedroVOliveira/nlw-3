import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const AncorLink = styled(Link)`

  width:${props=> props.width}px;
  height:${props=> props.height}px;
  background:${props => props.color};
  border-radius:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration:none;
  transition: all .3s;

  &:hover {
    background:${props => props.hover};
    transition: all .3s;
  }

`
