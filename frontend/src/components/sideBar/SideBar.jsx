import React from 'react';
import * as Styles from './SideBarStyles';
import { NavLink, Link } from 'react-router-dom';
// import { NavLink } from '../navlink/NavLink';
import { FaTimes } from 'react-icons/fa';
import Backdrop from '../Backdrop';
import { user } from '../Authentication';
import {
  RiQuestionFill,
  RiContactsBookFill,
  RiMoneyDollarCircleFill,
  RiPagesFill,
  RiPresentationFill,
} from 'react-icons/ri';

const showAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const navData2 = [
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

const navData = [
  {
    navName: 'Courses',
    path: '/courses',
    icon: <RiPresentationFill />,
  },
  {
    navName: 'About',
    path: '/about_us',
    icon: <RiPagesFill />,
  },
  {
    navName: 'Tuition & Fees',
    path: '/fees',
    icon: <RiMoneyDollarCircleFill />,
  },
  {
    navName: 'FAQS',
    path: '/faqs',
    icon: <RiQuestionFill />,
  },

  {
    navName: 'Contact',
    path: '/contact',
    icon: <RiContactsBookFill />,
  },
];

export const SideBar = ({ setShowSidebar }) => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
    setShowSidebar(false);
  };
  return (
    <>
      <Backdrop onClick={() => setShowSidebar(false)} />
      <Styles.SideBar
        variants={showAnimation}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <Styles.CloseSideBarIcon onClick={() => setShowSidebar(false)}>
          <FaTimes />
        </Styles.CloseSideBarIcon>

        <Styles.SideBarNavLinks>
          {navData2.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setShowSidebar(false)}
              >
                <span>{item.icon}</span>
                <span>{item.navName}</span>
              </NavLink>
            </li>
          ))}
        </Styles.SideBarNavLinks>

        {user ? (
          <Styles.SidebarUserBox>
            <h4>
              {user.firstname} {user.lastname}
            </h4>
            <button onClick={handleLogout}>Logout</button>
          </Styles.SidebarUserBox>
        ) : (
          <Styles.SidebarUserBox>
            <Link to='/students/register' onClick={() => setShowSidebar(false)}>
              <button>Register</button>
            </Link>
            <Link to='/students/login' onClick={() => setShowSidebar(false)}>
              <button>Login</button>
            </Link>
          </Styles.SidebarUserBox>
        )}
      </Styles.SideBar>
    </>
  );
};
