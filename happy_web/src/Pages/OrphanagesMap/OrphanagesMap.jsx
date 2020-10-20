import React from 'react';
import {FiPlus} from 'react-icons/fi';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AncorLink from '../../Components/Button';
import {PageMap, LateralContent} from './styled';
import mapMarkerImg from '../../assets/img/Local.svg';
const OrphanagesMap = () => {
  return (
    <PageMap>
      <LateralContent>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Caucaia</strong>
          <span>Ceará</span>
        </footer>
      </LateralContent>
      <Map
          center={[-3.7579765, -38.6067943]}
          zoom={13}
          style={{width:'100%', height:'100%'}}
          >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      </Map>
      <AncorLink to="/create-orphanages" width={64} height={64} color="#15c3d5" hover="#17d6eb">
        <FiPlus size={32} color="#fff"/>
      </AncorLink>
    </PageMap>
  )
}

export default OrphanagesMap;
