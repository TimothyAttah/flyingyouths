import styled from 'styled-components';
// import backroundPic from '../../assets/beauty2.jpg'
import backroundPic from '../../assets/note1.jpg.jpg';

export const AboutContainer = styled.div`
  width: 100%;
`;
export const AboutImgContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url(${backroundPic});
  height: 100vh;
  /* padding-top: 20%; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 50px;

  @media screen and (max-width: 600px) {
    height: 70vh;
  }

  @media screen and (max-width: 450px) {
    height: 60vh;
  }

  @media screen and (max-width: 350px) {
    height: 70vh;
  }
`;
export const AboutImgContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h6 {
    color: white;
    margin: 0 auto;
    font-weight: bold;
    text-transform: uppercase;
  }

  h1 {
    --to: bottom;
    font-size: 3rem;
    font-weight: bolder;
    background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    line-height: 3.5rem;
    padding-bottom: 5px;
  }

  p {
    font-size: 20px;
    color: #e8e191;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 2.5rem;

      line-height: 2.5rem;
      padding-bottom: 5px;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 1.2rem;
      line-height: 1.2rem;
      padding-bottom: 5px;
    }

    p {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 350px) {
    h1 {
      font-size: 1rem;
      line-height: 1rem;
      padding-bottom: 5px;
    }

    p {
      font-size: 10px;
    }
  }
`;

export const AboutMainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AboutInfoContainer = styled.div`
  width: 700px;
  margin-top: 40px;
  h3 {
    color: white;
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

  @media screen and (max-width: 600px) {
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 30px;
  }
`;

export const AboutMainInfoContainer = styled.div`
  p {
    font-size: 14px;
  }
`;

export const AboutInfoOptions = styled.div`
  max-width: 300px;
  width: 100%;
  h4 {
    font-size: 16px;
    text-transform: capitalize;
    color: #fff;
  }

  p {
    font-size: 13px;
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
export const AboutTeamContainer = styled.div`
  text-align: center;
  h4 {
    text-transform: capitalize;
    color:#fff;
  }
`;
export const AboutTeamImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  gap: 20px;
  margin: auto;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-top: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const AboutTeamImgBox = styled.div`
  width: 300px;
  box-sizing: border-box;

  img {
    width: 100%;
  }
`;

export const ApplyNowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  p {
    font-size: 20px;
  }
  button {
    all: unset;
    border: 1px solid #afaeae55;
    padding: 10px 20px;
    border-radius: 20px;
    background-image: linear-gradient(to bottom, #eee1, transparent, #eee1);
    transition: 0.5s;
    text-transform: capitalize;

    :hover {
      background-color: #c691e6;
      color: #040018;
      box-shadow: 0 0 50px #c691e6;
    }
  }

  @media screen and (max-width: 600px) {
    text-align: center;
  }

  @media screen and (max-width: 450px) {
   p{
    font-size: 16px;
   }
  }
`;
// export const AboutContainer = styled.div``;
