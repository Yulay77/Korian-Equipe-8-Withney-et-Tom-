import React from 'react';
import DynamicText from '../components/TexteDynamique/DynamicText';



const Home = () => {
  return (
    <div>
        <div className="home">
        <div className="home-main">
          <div className="main-content">
            <h1 className='Korian'>Korian</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;