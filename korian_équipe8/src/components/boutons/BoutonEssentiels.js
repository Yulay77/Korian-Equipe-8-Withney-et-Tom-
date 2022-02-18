import React from 'react';


function boutonEssentiels(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default boutonEssentiels;