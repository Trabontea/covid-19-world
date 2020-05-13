import React from 'react';
import Card from "../commons/card/card";
import './info-general.style.scss';

const InfoGeneral =({general}) => {
  return (
    <div className="info-general">
      <Card
        info={general.NewConfirmed.toLocaleString()}
        name={'Cazuri Noi'}
      />
      <Card
        info={general.NewDeaths.toLocaleString()}
        name={'Nou Decedati'}
      />
      <Card
        info={general.NewRecovered.toLocaleString()}
        name={'Nou Recuperati'}
      />
      <Card
        info={general.TotalConfirmed.toLocaleString()}
        name={'Total Confirmati'}
      />
      <Card
        info={general.TotalDeaths.toLocaleString()}
        name={'Total Decedati'}
      />
      <Card
        info={general.TotalRecovered.toLocaleString()}
        name={'Total Recuperati'}
      />
    </div>
  )
};
export default InfoGeneral;