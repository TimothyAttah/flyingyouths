import styled from "styled-components";

export const AboutMainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Lato', sans-serif;
  color: #040018;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AboutInfoContainer = styled.div`
  max-width: 600px;
  margin-top: 40px;
  padding: 0 20px;
  h3 {
    color: white;
    color: #333;
    color: #040018;

    position: relative;
    width: 300px;
    margin: 0 auto;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    ::before {
      content: '';
      width: 50px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      bottom: 50%;
      left: 20px;
    }

    ::after {
      content: '';
      width: 50px;
      height: 2px;
      background-color: #fff;
      /* color: #333; */

      position: absolute;
      bottom: 50%;
      right: 18px;
    }
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 20px;
    text-align: center;

    h3 {
      width: 258px;
      ::before {
        left: 20px;
      }

      ::after {
        right: 20px;
      }
    }
  }
`;

export const AboutInfoOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 50px;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 30px;
  }
`;

export const AboutMainInfoContainer = styled.div`
  p {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    p {
      text-align: center;
    }
  }
`;

export const AboutInfoOptions = styled.div`
  max-width: 250px;
  h4 {
    font-size: 18px;
    text-transform: capitalize;
    color: #fff;
    color: #333;
    color: #040018;
    text-align: center;
  }

  p {
    font-size: 14px;
    color: #040018;
    text-align: center;
  }
`;

export const AboutInfoImgContainer = styled.div`
  width: 700px;

  img {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    max-width: 500px;
    width: 100%;
  }
`;
