import React from 'react'
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'
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
        <div></div>

        <AncorLink to="/">
          <FiPlus size={32} color="#fff"/>
        </AncorLink>
      </LateralContent>
    </PageMap>
  )
}

export default OrphanagesMap;
