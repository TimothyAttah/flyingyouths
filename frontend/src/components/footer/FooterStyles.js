import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 50px;
  background-color: #fff;
  padding: 20px;
  /* color:#fff; */

  h2, h4, p, a {
    /* color:#fff; */
  }

  h2, h4 {
    padding-bottom: 20px;
  }
`;

export const FooterDetailsMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px;
  /* color: #fff; */
  gap:20px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
export const FooterDetailsInfoContainer = styled.div`
  width: 250px;
  /* color: #fff; */

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 12px;
  }

  @media screen and (max-width: 950px) {
    width: 250px;
    text-align: center;

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }
  }
`;
export const FooterDetailsPagesContainer = styled.div`
  width: 250px;

  p {
    font-weight: bold;
    padding-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

    li a {
      display: flex;
      font-size: 15px;
      color:#333;
    }
  }

  @media screen and (max-width: 950px) {
    width: 250px;
    text-align: center;

    ul {
      gap: 10px;
      justify-content: center;
      align-items: center;

      li a {
        display: flex;
        font-size: 14px;
      }
    }
  }
`;

export const FooterDetailsFormContainer = styled.div`
  width: 380px;
  p {
    font-size: 12px;
  }

  form {
    width: 100%;
    label {
      /* color:#fff; */
    }

    button {
      background-color: #333;
      height: 40px;
      width: 100%;
      border-radius: 10px;
      /* background-color: transparent; */
      border: 1px solid #fff;
      color: #fff;
    }
  }

  @media screen and (max-width: 950px) {

    width: 300px;

    h4, p {
      text-align: center;
    }
  }

  @media screen and (max-width: 300px){
    width: 100%;
  }
`;

export const FooterDetailsInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  div input {
    width: 180px;
  }


  @media screen and (max-width: 950px) {
    width: 300px;

    div input {
      width: 100%;
    }
  }

  @media screen and (max-width: 300px) {
    width: 100%;
  }
`;
export const FooterDetailsContainer = styled.div`
  background-color: #333;
  background-color: #0d6ade;
  width: 100%;
  height: 80px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    color: #fff;
    font-size: 15px;
  }
`;
