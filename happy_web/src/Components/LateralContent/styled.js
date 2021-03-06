import styled from 'styled-components';


export const LeftAsideContent = styled.aside`
  position:fixed;
  left:0;
  width:${props => props.width}px;
  height:720px;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  padding:80px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  h3 {
    text-align:center;
    color:#8FA7B2;
  }

`;
