import React from 'react'
import mapMarkerImg from '../../assets/img/Local.svg';
import LateralContent from '../../Components/LateralContent';
import AncorLink from '../../Components/Button';
import {Container,AddTitle,FormAdd} from './styled';
import {FiArrowLeft} from 'react-icons/fi';
const AddOrphanages = () => {
  return (
    <Container>
      <LateralContent width={64} >
        <img src={mapMarkerImg} alt="logo"/>
        <AncorLink to="/map" width={64} height={64} color="#17d6eb" hover="#15c3d5">
          <FiArrowLeft size={26} color="rgb(255,255,255)" />
        </AncorLink>
      </LateralContent>
      <header>
        <AddTitle>Adicione um orfanato</AddTitle>
      </header>
      <FormAdd action="post">
        <h2>Dados</h2>
      </FormAdd>
    </Container>
  )
}


export default AddOrphanages;
