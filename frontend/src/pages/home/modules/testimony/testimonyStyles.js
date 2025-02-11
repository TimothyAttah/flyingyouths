import styled from 'styled-components';

export const ReasonsContainer = styled.div`
  /* margin: 50px 0; */
  /* font-family: 'Merriweather', serif; */
  font-family: 'Lato', sans-serif;
`;
export const ReasonsTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  text-transform: capitalize;
  padding-bottom: 20px;
  font-family: 'Cormorant Garamond', system-ui;
  /* font-family: 'Lato', sans-serif; */
  /* font-family: 'Merriweather', serif; */
  font-family: 'Lato', sans-serif;
`;

export const ReasonsListsContainer = styled.div`
  /* width: 1100px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  gap: 20px;
  padding: 20px;
`;
export const ReasonsList = styled.div`
  width: 400px;
  display: flex;
  gap: 10px;
`;

export const ReasonsListIcon = styled.div`
  img {
    width: 200px;
  }
`;
export const ReasonsListTitle = styled.div`
  /* color: */
`;
export const ReasonsListInfo = styled.div`
  font-family: 'Lato', sans-serif;
`;

export const TestimonyWrapper = styled.div`
  padding: 20px;
  padding-top: 40px;
  h2 {
    text-align: center;
    /* color: #0d6efd;
    color: #040018; */
    margin-bottom: 20px;
   font-family: 'Lato', sans-serif;
  }
`;

export const TestimonyName = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const TestimonyImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid #ccc;


  img {
    width: 100%;
    height: 100%;
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

export const EnrollWrapper = styled.div`
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  /*font-family: 'Lato', sans-serif; */
  font-family: 'Lato', sans-serif;

  h2 {
    text-transform: capitalize;
    color: #fff;
  }
`;

export const EnrollButtonWrapper = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  align-items: center;
  gap:20px;
  flex-wrap: wrap;
`;


export const ApplyNowContainer = styled.div`
  width: 100%;
  background-color:#333;
  padding: 20px;
  text-align: center;
  h2 {
    text-transform: capitalize;
  }
`;
