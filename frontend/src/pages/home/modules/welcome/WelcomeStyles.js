import styled from 'styled-components';
import { theme } from '../../../../themes';

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* gap: 50px; */
  padding-top: 50px;
  margin-bottom: 40px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const WelcomeContentContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  transition: 5s ease all;
  background-color: #fff;
  border-radius: 30px;
  padding-top: 30px;
  box-shadow: 0 0 10px hsla(#2d2a44, 57%, 63%, 0.3);
  box-shadow: 0 0 10px rgba( 0,0,0,0.1, #1d1b34);


  h4 {
    padding-bottom: 15px;
    font-size: 26px;
    /* text-transform: capitalize; */
    /* color: #fff; */
    /* background-image: repeating-linear-gradient(
        to right,
        #2d2a44 0 1px,
        transparent 2px 200px
      ),
      repeating-linear-gradient(to bottom, #2d2a44 0 1px, transparent 2px 200px),
      radial-gradient(at 50% 50%, #2d2a44, #1d1b34); */
      color:#000;
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }

  p {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 35px;
    background-image: repeating-linear-gradient(
        to right,
        #2d2a44 0 1px,
        transparent 2px 200px
      ),
      repeating-linear-gradient(to bottom, #2d2a44 0 1px, transparent 2px 200px),
      radial-gradient(at 50% 50%, #2d2a44, #1d1b34);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  max-width: 500px;
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

export const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TestimonyPicBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid #ccc;

  img {
    width: 100%;
  }
`;
