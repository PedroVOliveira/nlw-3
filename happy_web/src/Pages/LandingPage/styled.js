import styled from 'styled-components';



export const PageLanding = styled.div`
  width:100vw;
  height:100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  display:flex;
  justify-content:center;
  align-items:center;
`

export const Location = styled.div`
  position:absolute;
  right:0;
  top:0;
  font-size:24px;
  line-height:34px;

  display:flex;
  flex-direction:column;
  text-align:right;

  strong {
    font-weight:800;
  }

`

export const EnterApp = styled.a`
  position:absolute;
  right:0;
  bottom:0;
  width:88px;
  height:88px;
  background:#ffd666;
  border-radius:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration:none;
  transition: all .3s;

  &:hover {
    background:#96FEFF;
    transition: all .3s;
  }

`
