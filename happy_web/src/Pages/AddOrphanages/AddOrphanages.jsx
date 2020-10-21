import React from 'react'
import mapMarkerImg from '../../assets/img/Local.svg';
import LateralContent from '../../Components/LateralContent';
import Input from '../../Components/Input';
import AncorLink from '../../Components/Button';
import {Container,AddTitle,FormAdd} from './styled';
import {FiArrowLeft} from 'react-icons/fi';
import 'leaflet/dist/leaflet.css';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
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
        <Map
          center={[-3.7579765, -38.6067943]}
          zoom={13}
          style={{width:'70%', height:'70%',marginTop:'40px'}}
          >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <h3>Clique no Mapa para adicionar a localização</h3>
        </Map>
        <Input label="Name" />
        <Input label="Name" />

      </FormAdd>
    </Container>
  )
}


export default AddOrphanages;
