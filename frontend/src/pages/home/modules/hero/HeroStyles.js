import styled from 'styled-components';

export const HeroContainer = styled.div`
  padding: 20px;
  padding-top: 100px;
  h1 {
    text-align: center;
    --to: left;
    font-size: 3rem;
    font-weight: bold;
    /* background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    /* text-transform: uppercase; */
    color:#333;
    line-height: 3.5rem;
    padding-bottom: 5px;
    margin-top: 20px;
  }

  h1.right {
    --to: right;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 570px) {
    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }

  @media screen and (max-width: 420px) {
    h1 {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  @media screen and (max-width: 290px) {
    h1 {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
`;

export const HeroSubTitle = styled.p`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  text-align: center;
  color: #333;
  font-size: 1.4rem;

  /* span {
    --to: left;
    background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  } */

  span {
    color: #0d6efd;
  }

  @media screen and (max-width: 570px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.9rem;
  }
`;

export const HeroButton = styled.div`
  all: unset;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #afaeae55; */
  /* padding: 10px 20px; */
  /* background-image: linear-gradient(to bottom, #eee1, transparent, #eee1); */
  transition: 0.5s;
  margin: 0 auto;
  margin-top: 12px;
  border: none;

  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    background-color: #333;
    background-color: #0d6efd;
    color: #fff;
    border-radius: 10px;
    border: none;
    transition: 0.5s;

    :hover {
      background-color: #c691e6;
      background-color: #0d6ade;
      background-color: #333;

      /* color: #040018; */
      /* box-shadow: 0 0 50px #c691e6; */
    }
  }
`;

export const HeroImageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  display: none;

  img {
    width: 100%;
  }
  @media screen and (max-width: 570px) {
    display: flex;
  }
`;

export const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  /* margin-top: 80px; */
`;
export const AboutUsPixContainer = styled.div`
  width: 500px;
  display: flex;
  /* align-items: center; */
`;


export const AboutUsPixItemContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
  }

`;

export const AboutUsPixItem = styled.div`
  width: 250px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;


export const AboutUsInfoContainer = styled.div`
  width: 500px;

  h2 {
    color: blue;
    text-transform: capitalize;
    padding-bottom: 15px;
    font-size: 32px;
    font-weight: 500;
  }

  p {
    color:#555;
    font-size: 18px;
  }

  a {
    display: block;
    width: 150px;
    border: 2px solid blue;
    text-align: center;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    font-size: 18px;

  }
`;
