import React, { useState } from 'react';
import * as Styles from './HeaderStyles';
import Nav from '../nav/Nav';
import { SideBar } from '../sideBar/SideBar';
import { AnimatePresence } from 'framer-motion';
import { user } from '../Authentication';
import { Link} from 'react-router-dom';
import { FadeIn } from '../fadeIn/FadeIn';

const TransparentHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [changeBG, setChangeBG] = useState(false)

  const changeBackground = () => {
    window.scrollY >= 80 ? setChangeBG(true) : setChangeBG(false)
  }

  window.addEventListener('scroll', changeBackground)

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <Styles.HeaderWrapper>
      <Styles.MainHeaderContainer className={changeBG ? 'activeHeader' : ''}>
        <Styles.HeaderLogo>
          <Link to='/' className={changeBG ? 'activeLogo' : ''}>
            <h1>EarnBigFromTech</h1>
          </Link>
        </Styles.HeaderLogo>
        <Nav setShowSidebar={setShowSidebar} />
        {/* <div>
          <Link to='/online-tutorials'>
            <button>Online academy</button>
          </Link>
        </div> */}

        {user ? (
          <Styles.HeaderUserBox>
            <h5>{user.firstname} {user.lastname}</h5>
            <Styles.HeaderButton onClick={handleLogout}>Logout</Styles.HeaderButton>
          </Styles.HeaderUserBox>
        ) : (
          <Styles.HeaderButtonBox>
            <Link to='/students/register'>
              <Styles.HeaderButton>Register</Styles.HeaderButton>
            </Link>
            <Link to='/students/login'>
              <Styles.HeaderButton>Login</Styles.HeaderButton>
            </Link>
          </Styles.HeaderButtonBox>
        )}

        <AnimatePresence>
          {showSidebar && <SideBar setShowSidebar={setShowSidebar} />}
        </AnimatePresence>
      </Styles.MainHeaderContainer>
    </Styles.HeaderWrapper>
  );
};

export default TransparentHeader;
