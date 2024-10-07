import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../themes';

export const SideBar = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 240px;
  height: 100vh;
  background: white;
  /* --to: top;
  background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191); */
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 7px 7px 5px 0 rgba(50, 50, 50, 0.75);
  z-index: 1144;
  background-color: #0d6efd;
  color: #fff;
`;

export const SideBarNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 20px;
  padding-right: 30px;

  a.active {
    /* background: rgba(255, 255, 255, 0.05); */

    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    text-align: center;
    justify-content: center;
  }

  li a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    /* padding: 10px 0; */
    border-radius: 5px;
    font-size: 20px;
    text-transform: uppercase;
    color: #fff;
    transition: 0.3s ease-in-out all;

    span:first-child {
      display: flex;
      align-items: center;
      font-size: 25px;
    }
  }
`;

export const CloseSideBarIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;

  svg {
    font-weight: normal;
    cursor: pointer;
  }
`;

export const LogoutBtn = styled.button`
  margin-top: 80px;
  width: 200px;
  height: 40px;
  position: absolute;
  bottom: 20px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(255, 255, 255, 0.05); */
  background: ${theme.color.bodyBgColor};
  /* background-color: crimson; */

  color: ${theme.color.bgLight};
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  z-index: 1;
  font-weight: 400;
  letter-spacing: 1px;
  overflow: hidden;
  transition: 0.5s;
  text-transform: capitalize;

  :hover {
    letter-spacing: 3px;
    ::before {
      transform: skewX(45deg) translateX(200%);
    }
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transform: skewX(45deg) translateX(0);
    transition: 0.5s;
  }
`;

export const Button = styled.div`
  position: relative;
  /* width: 130px; */
  width: ${(props) => (props.width ? `${props.width}` : '130px')};
  height: 40px;
  /* margin: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 70px;

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: rgba(255, 255, 255, 0.05); */
    background: ${theme.color.bodyBgColor};
    color: ${theme.color.bgLight};
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    z-index: 1;
    font-weight: 400;
    letter-spacing: 1px;
    overflow: hidden;
    transition: 0.5s;
    text-transform: capitalize;

    :hover {
      letter-spacing: 3px;
      ::before {
        transform: skewX(45deg) translateX(200%);
      }
    }

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.15),
        transparent
      );
      transform: skewX(45deg) translateX(0);
      transition: 0.5s;
    }
  }
`;

export const SidebarUserBox = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;

  h4 {
    text-transform: capitalize;
  }

  button {
    width: 200px;
    height: 50px;
    border-radius:10px;
    background-color: crimson;
    color:#fff;
    text-transform: uppercase;
    :hover {
      opacity: 0.7;
    }
  }
`;
