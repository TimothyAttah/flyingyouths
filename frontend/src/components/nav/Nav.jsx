import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styles from './NavStyles';
import { FaBars } from 'react-icons/fa';

export const navData = [
  // {
  //   navName: 'Courses',
  //   path: '/courses',
  // },
  {
    navName: 'Home',
    path: '/',
  },
  {
    navName: 'About',
    path: '/about_us',
  },
  // {
  //   navName: 'Programs',
  //   path: '/programs',
  // },
  {
    navName: 'Tech Skills',
    path: '/tech-skills',
  },
  {
    navName: 'FAQS',
    path: '/faqs',
  },
  {
    navName: 'Contact',
    path: '/contact',
  },
];

const Nav = ({ setShowSidebar }) => {
  const reloadWindow = () => {
    // window.location.re;
  };
  return (
    <Styles.NavWrapper>
      <Styles.NavContainer>
        <ul>
          {navData.map((item, i) => (
            <NavLink to={item.path} key={i} onClick={reloadWindow}>
              <li>{item.navName}</li>
            </NavLink>
          ))}
        </ul>
      </Styles.NavContainer>

      <div onClick={() => setShowSidebar(true)}>
        <FaBars />
      </div>
    </Styles.NavWrapper>
  );
};

export default Nav;
