import { useLocation } from 'react-router-dom';
import TransparentHeader from './TransparentHeader';
import MainHeader from './MainHeader';

const Header = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' || location.pathname === '/about' ? (
        <TransparentHeader />
      ) : (
        <MainHeader />
      )}
    </>
  );
};

export default Header;
