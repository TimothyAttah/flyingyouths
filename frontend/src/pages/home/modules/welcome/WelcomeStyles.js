import styled from 'styled-components';
import { theme } from '../../../../themes';

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* gap: 50px; */
  padding-top: 50px;
`;

export const WelcomeContentContainer = styled.div`
  width: 600px;
  padding: 20px;

  transition: 5s ease all;

  h4 {
    padding-bottom: 15px;
    font-size: 26px;
    text-transform: capitalize;
    color: #fff;
  }

  p {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 25px;
  }

  small {
    color: gray;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    span {
      display: flex;
      align-items: center;
      width: 30px;
      height: 1px;
      background-color: gray;
    }
  }
`;
export const DirectorName = styled.p`
  color: gray;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  span {
    display: flex;
    align-items: center;
    width: 30px;
    height: 1px;
    background-color: gray;
  }
`;



export const WelcomeImgContainer = styled.div`
  width: 500px;
  transition: 5s ease all;

  img {
    width: 100%;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    width: 100%;

    opacity: 1;
    transform: scale(100%);
    transition: 5s ease all;
  }
`;
