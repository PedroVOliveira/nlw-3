import styled from 'styled-components';


export const FormGroup = styled.div`
  display:flex;
  flex-direction:column;

  margin-top:40px;

  & + & {
    margin-top:24px;
  }

  label {
      color:#8FA7B2;

  }

  input {
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    box-sizing: border-box;
    border-radius: 20px;
    outline:none;
    padding:20px;
  }

`;
