import React from 'react'
import {FormGroup} from './styled';
const Input = ({label,type,...rest}) => {
  return (
    <FormGroup>
      <label >{label}</label>
      <input type={type}/>
    </FormGroup>
  )
}


export default Input;
