import styled from "styled-components";

export const AboutTeamContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  h4 {
    text-transform: capitalize;
    color: #fff;
    color: #333;
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
    p {
      font-size: 16px;
    }
  }
`;
//
