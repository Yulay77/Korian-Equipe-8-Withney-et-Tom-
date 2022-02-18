import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import logo1 from './logo1.svg';
import logo2 from './logo2.svg';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#4EAABF'}}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <li className='menu-bars' onClick={showSidebar}>
            <img className='logo2' height={55} src={logo2} alt="logo"/>
            <AiIcons.AiOutlineHome className='lien'/>
            <FaIcons.FaRegBuilding className='lien2'/>
            <AiIcons.AiOutlineStar className='lien3'/>
            <AiIcons.AiOutlineHeart className='lien4'/>
            <FaIcons.FaSyringe className='lien5'/>
            <FaIcons.FaRegClipboard className='lien6'/>
            <AiIcons.AiOutlineLogout className='lien7'/>
            </li>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='/' className='menu-bars1'>
                <img className='logo' height={57} src={logo1} alt="logo"/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='span1'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
