import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';



export const SidebarData = [
  {
    title: 'Accueil',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Etablissement',
    path: '/etablissement',
    icon: <FaIcons.FaRegBuilding />,
    cName: 'nav-text'
  },
  {
    title: 'Essentiels',
    path: '#',
    icon: <AiIcons.AiOutlineStar />,
    cName: 'nav-text'
  },
  {
    title: 'Bien-être',
    path: '#',
    icon: <AiIcons.AiOutlineHeart />,
    cName: 'nav-text'
  },
  {
    title: 'Incidents',
    path: '#',
    icon: <FaIcons.FaSyringe />,
    cName: 'nav-text'
  },
  {
    title: 'Prévention',
    path: '#',
    icon: <FaIcons.FaRegClipboard />,
    cName: 'nav-text'
  },
  {
    title: '',
    path: '#',
    cName: 'nav-text1'
  },
  {
    title: 'Déconnexion',
    path: '/connexion',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  }
];

