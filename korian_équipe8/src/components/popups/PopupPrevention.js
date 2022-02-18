import React from 'react';
import flecheRetour from './flecheRetour.svg';

function BoutonPrevention(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
      <button className='close-btn' onClick={() => props.setTrigger(false)}>
          <img src={flecheRetour} alt="flecheRetour"/>
      </button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default BoutonPrevention;