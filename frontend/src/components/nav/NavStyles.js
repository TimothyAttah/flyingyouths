import styled from 'styled-components';
import { theme } from '../../themes';

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;

  .activeNavbar {
    a {
      color: #fff;
      ::after {
        background-color: #fff;
      }
    }

    svg {
      color: #fff;
    }
  }

  svg {
    color: #fff;
    font-size: 20px;
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    svg {
      display: flex;
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 90px;

  .transparent {
    color: #fff;
    ::after {
      background-color: #fff;
    }
  }

  .activeNavbar {
    a {
      color: #fff;
      ::after {
        background-color: #fff;
      }
    }
  }

  .active {
    opacity: 1;
    ::after {
      width: 120%;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      background: transparent;
      color: #fff;
      /* color: #333; */
      /* color: #000; */
      font-size: 18px;
      font-weight: bold;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
      transition: 0.8s ease all;
      font-weight: bold;
      ::after {
        content: '';
        position: absolute;
        bottom: -20%;
        left: -10%;
        width: 0%;
        height: 3px;
        background-color: #fff;
        /* background-color: #000; */
        border-radius: 30px;
        transition: 0.8s ease all;
      }

      :hover {
        opacity: 1;
        ::after {
          width: 120%;
        }
      }
    }
  }

  button {
    width: 100px;
    padding: 10px;
    /* background-color: #2836e9; */
    /* background-color: #0056b3; */
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
    font-weight: bold;

    :hover {
      background-color: #0056b3;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
