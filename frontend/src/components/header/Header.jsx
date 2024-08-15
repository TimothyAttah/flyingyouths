import { useLocation } from 'react-router-dom';
import TransparentHeader from './TransparentHeader';
import MainHeader from './MainHeader';

const Header = () => {
  const location = useLocation();
  const user = true;

  return (
    <>
      {/* {location.pathname === '/' || location.pathname === '/about' ? (
        <TransparentHeader />
      ) : (
        <MainHeader />
      )} */}
      {user? (
        <TransparentHeader />
      ) : (
        <MainHeader />
      )}
    </>
  );
};

export default Header;
