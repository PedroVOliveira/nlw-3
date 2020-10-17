import styled from 'styled-components';

export const AncorLink = styled.div`

  a {
    width:${props=> props.size};
    height:${props=> props.size};
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
  }

`
