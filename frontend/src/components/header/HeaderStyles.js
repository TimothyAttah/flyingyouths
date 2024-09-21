import styled from 'styled-components';
import { theme } from '../../themes';

export const HeaderWrapper = styled.div`
  transition: 1s ease-in-out all;
  position: relative;
  background-color: #333;
  background-color: #0d6efd;

  .activeHeader {
    /* --to: left;
    background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191);
     */

    background-color: #333;
    color: #fff;
    transition: 1s ease-in-out all;
    box-shadow: ${theme.color.boxShadow};
  }

  .activeLogo h1 {
    /* --to: left;
    background-image: linear-gradient(to var(--to), #000, #000, #000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: #fff;
  }

  .transparent {
    background: transparent;
    color: #fff;
  }

  .mainColor {
    background: ${theme.color.mainColor};
    color: #fff;

    a {
      color: #fff;
      ::after {
        background-color: #fff;
      }
    }
  }

  .langOptions {
    position: absolute;
    right: 200px;
    z-index: 1000000000;
  }
`;

export const MainHeaderContainer = styled.div`
  position: fixed;
  max-width: 1500px;
  width: 100%;
  top: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 999;
  box-shadow: ${theme.color.boxShadow};
  color: #fff;
  font-weight: bold;
  transition: 1s ease-in-out all;
  /* background: ${theme.color.mainColor}; */
  background-color: #333;
  background-color: #0d6efd;

  a {
    color: #fff;
  }
`;

export const HeaderLogo = styled.div`
  a {
    display: flex;
    align-items: center;
  }
  h1 {
    /* --to: left;
    background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: #fff;
    text-transform: capitalize;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 420px) {
    a h1 {
      font-size: 1.2rem;
    }
  }
`;

export const HeaderContainer = styled.header`
  position: fixed;
  max-width: 1500px;
  width: 100%;
  top: 0;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
  z-index: 999;
  box-shadow: ${theme.color.boxShadow};
  color: #fff;
  color: #000;
  font-weight: bold;
  transition: 1s ease-in-out all;
`;

export const HeaderButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    display: none;
  }
`;

export const HeaderButton = styled.button`
  /* width: 100px;
  padding: 10px; */

  /* color: #fff;
  border-radius: 5px;
  transition: 0.3s ease-in-out all;
  text-transform: capitalize;
  font-weight: bold; */

  all: unset;
  border: 1px solid #afaeae55;
  padding: 10px 20px;
  border-radius: 20px;
  background-image: linear-gradient(to bottom, #eee1, transparent, #eee1);
  transition: 0.5s;

  :hover {
    /* background-color: #2836e0; */
    background-color: #c691e6;
    color: #040018;
    box-shadow: 0 0 50px #c691e6;
  }
`;

export const HeaderMenu = styled.div`
  font-size: 30px;
`;
