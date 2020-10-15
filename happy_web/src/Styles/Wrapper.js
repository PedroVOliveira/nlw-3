import styled from 'styled-components';
import Logo from '../assets/img/Ilustra02.svg';
export const  Wrapper = styled.div`

  background:url(${Logo}) no-repeat 80% center;

  position:relative;
  width:100%;
  max-width:1100px;
  height:100%;
  max-height:688px;

  display:flex;
  align-items:flex-start;
  flex-direction:column;
  justify-content:space-between;

  main {
    max-width:350px;

    h1 {

      font-size:76px;
      font-weight:900;
      line-height:70px;
    }

    p {
      margin-top:40px;
      font-size:24px;
      line-height:34px;

    }
  }


`
