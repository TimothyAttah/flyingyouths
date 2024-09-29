import styled from 'styled-components'
import heroBg from '../../assets/paymentBg.jpg'

export const PaymentContainer = styled.div`
  padding-top: 70px;
`;

export const PaymentHero = styled.div`
  width: 100%;
  /* height: 80vh; */
`;

export const PaymentHeroContainer = styled.div`
  background-image: url(${heroBg});
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  /* padding: 0px 20px; */
  padding: 15% 30px;
  color: #fff;
  text-align: center;

  h2 {
    font-size: 50px;
    margin-bottom: 15px;
    color: #fff;
    font-family: 'Noto Serif', system-ui;
  }

  p {
    max-width: 600px;
    font-size: 14px;
    margin: auto;
    line-height: 20px;
    font-family: 'Noto Serif', system-ui;
  }

  @media screen and (max-width: 470px) {
    background-size: cover;
    padding: 12% 20px;
    text-align: center;

    h2 {
      font-size: 15px;
      margin-bottom: 10px;
    }

    p {
      font-size: 10px;
      line-height: 16px;
    }
  }
`;

export const PaymentInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fff;
  padding: 20px 0;
  flex-wrap: wrap;
  box-shadow: 0px 2px 5px 1px rgba(0,0,0,0.90);
`;

export const PaymentInfo = styled.div`
  width: 250px;
  height: 180px;
  /* height: 80vh; */
  border: 1px solid gray;
  padding: 10px;
  text-align: center;
  border-radius: 10px;

  h5 {
    margin: 10px 0;
    font-size: 16px;
  }

  p {
    font-size: 11px;
    line-height: 15px;
  }
`;

export const PaymentInfoImg = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const PaymentDescription = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 30px auto;
  text-align: center;
  padding: 20px;

  h4 {
    font-size: 35px;
    padding-bottom: 20px;
  }

  p {
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (max-width: 450px) {
    h4 {
      font-size: 25px;
    }

    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
