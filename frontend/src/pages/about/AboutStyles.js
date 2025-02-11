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
  /* background-image: url(${backroundPic}); */
  height: 50vh;
  /* padding-top: 20%; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 50px;
  margin-top: 20px;

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
    font-family: 'Corinthia', cursive;
  }

  h1 {
    /* --to: bottom; */
    font-size: 3rem;
    font-weight: bolder;
    /* background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: #333;
    text-transform: uppercase;
    line-height: 3.5rem;
    padding-bottom: 5px;
    font-family: 'Corinthia', cursive;
    /* font-weight: bold; */
  }

  p {
    font-size: 20px;
    color: #e8e191;
    color: #999;

    font-weight: bold;
    font-family: 'Lato', sans-serif;
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


// export const AboutContainer = styled.div``;
