import styled from 'styled-components';

export const TechListModalContainer = styled.div`
  min-height: 600px;
  border-radius: 20px;
  position: relative;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;


  @media only screen {
    width: 90%;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  @media screen and (min-width: 1281px) {
    width: 80%;
    height: 80%;
    max-width: 1800px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 30px;
  }
`;

export const TechListModalImg = styled.div`
  width: 100%;
  height: 65%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media only screen {
    width: 100%;
  }

  @media screen and (min-width: 1281px){
    width: calc(70% -10px);
  }
`;
export const TechListModalInfo = styled.div`
  background-color: #fff;
  display: flex;

  @media only screen {
    width: 100%;
    height: 100%;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: 1281px) {
    width: calc(30% -10px);
    height: 100%;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const TechListModalRow = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  text-align:left;
`;

export const TechListModalBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TechListModalTitle = styled.h2`
  font-size: 3rem;
`;
export const TechListModalDesc = styled.p`
  font-size: 20px;
`;
export const TechListModalPrice = styled.span`
  font-size: 2rem;
  color:#737373;
`;
export const TechListModalDuration = styled.div``;
export const TechListModalOutlineWrapper = styled.div``;
export const TechListModalOutline = styled.div`
  margin: 20px 0px;
  text-align: left;
  overflow-y: scroll;

  ul {
    padding: 0;
  }
`;

export const TechListModalCloseButton = styled.button`
  all: unset;
  position: absolute;
  width: 40px;
  height: 40px;
  font-size: 30px;

  @media only screen {
   right: -10px;
   top: -5px;
   /* color:#cacaca; */
  }

  @media screen and (min-width: 1281px) {
   right: 10px;
   top: 10px;
  }
`;
