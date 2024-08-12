import React, { useState } from 'react';
import * as Styles from './HeaderStyles';
import Nav from '../nav/Nav';
import { SideBar } from '../sideBar/SideBar';
import { AnimatePresence } from 'framer-motion';
import { user } from '../Authentication';
import { Link, useLocation } from 'react-router-dom';
import { FadeIn } from '../fadeIn/FadeIn';

const MainHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener('scroll', changeBackground);
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <FadeIn delay={0.6} direction='down'>
      <Styles.HeaderWrapper>
        <Styles.MainHeaderContainer>
          <h1>
            <Link to='/'>flyingyouths</Link>
          </h1>
          <div>
            <Nav
              setShowSidebar={setShowSidebar}
              location={location}
              navbar={navbar}
            />
          </div>
          <div id='google_translate_element' className='langOptions'></div>

          <Styles.HeaderButtonBox>
            {!user ? (
              <div>
                <Link to='/signup'>
                  <Styles.HeaderButton>apply now</Styles.HeaderButton>
                </Link>
              </div>
            ) : (
              <div>
                <a href='/' onClick={handleLogout}>
                  <Styles.HeaderButton>Logout</Styles.HeaderButton>
                </a>
              </div>
            )}
          </Styles.HeaderButtonBox>

          <AnimatePresence>
            {showSidebar && <SideBar setShowSidebar={setShowSidebar} />}
          </AnimatePresence>
        </Styles.MainHeaderContainer>
      </Styles.HeaderWrapper>
    </FadeIn>
  );
};

export default MainHeader;
