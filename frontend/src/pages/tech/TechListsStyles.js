import styled from 'styled-components';

export const TechListContainer = styled.div`
  min-width: 300px;
  width: 100%;
  width: 350px;
  position: relative;
  margin: 20px;
  /* cursor: pointer; */
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  box-shadow: 0px 10px 0.625rem (0, 0, 0, 0.1);
  box-shadow: 0px -2px rgba(0, 0, 0, 0.25);
  box-shadow: rgb(0 0 0 / 59%) 0px 2px 5px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  /* font-family: 'Cormorant Garamond', system-ui; */
  font-family: 'Lato', sans-serif;

  /* ::before {
    content: '';
    display: block;
    padding-bottom: calc((5 / 4) * 100%);
  } */
`;

export const TechListContent = styled.div`
  /* position: absolute;
  left: 0;
  top: 0; */
  width: 100%;
  /* height: 100%; */
  border-radius: 10px;
  overflow: hidden;
`;
export const TechListImgBox = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
`;

export const TechListDetails = styled.div`
  /* height: 35%; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 5px 25px;
  position: relative;
`;
export const TechListRow = styled.div`
  margin: 2px 0px;
  display: flex;
  align-items: center;
`;

export const TechListRowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

export const TechListDuration = styled.div`
  /* position: absolute; */
  font-size: 1rem;
  /* right: 10px;
  top: 10px; */
  background-color: rgb(223, 247, 255);
  padding: 5px 10px;
  border-radius: 15px;
`;

export const TechListTitle = styled.h4`
  font-size: 1.2rem;
  text-align: center;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #040018;

  /* margin-top: 10px; */
  /* padding-bottom: 10px; */
`;

export const TechListFee = styled.span`
  color: #737373;
  color: #040018;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const TechListViewButton = styled.button`
  width: 250px;
  height: 40px;
  background-color: navy;
  color: #fff;
  margin: 15px auto;
  border-radius: 20px;
`;

export const TechListJoinButton = styled.button`
  width: 250px;
  height: 40px;
  background-color: navy;
  color: #fff;
  /* margin: 20px auto; */
  border-radius: 20px;
`;
