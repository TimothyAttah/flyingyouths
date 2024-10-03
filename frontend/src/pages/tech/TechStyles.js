import styled from 'styled-components';

export const TechsMainContainer = styled.div`
  padding-top: 100px;
`;

export const TechListsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
`;

export const TechLists = styled.div`
  width: 320px;
  h3 {
    font-size: 24px;
  }
  border: 2px solid #ccc;
`;

export const TechList = styled.div`
 padding: 10px;
`;
export const TechListsImg = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TechPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TechListTitle = styled.div`
  /* height: 80px; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

export const TechListDesc = styled.div`
  font-size: 14px;
  height: 120px;
  margin-top: 10px;
`;

export const TechOutlines = styled.div`
  width: 100%;
  padding-top: 20px;
  h4 {
    font-size: 16px;
  }

  ul,li {
    padding: 0;
  }
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const TechTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  /* font-family: 'Cormorant Garamond', system-ui; */
  font-family: 'Lato', sans-serif;
  padding-bottom: 10px;
  color: #040018;
  /* text-decoration: underline; */
`;

export const TechSubTitle = styled.h4`
  text-align: center;
  font-size: 2rem;
  /* font-family: 'Cormorant Garamond', system-ui; */
  font-family: 'Lato', sans-serif;
  color: #040018;
  /* text-decoration: underline; */
`;
