import styled from "styled-components";

export const ReasonsContainer = styled.div`
  /* margin: 50px 0; */
`;
export const ReasonsTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  text-transform: capitalize;
  padding-bottom: 20px;
`;

export const ReasonsListsContainer = styled.div`
  /* width: 1100px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  gap: 20px;
`;
export const ReasonsList = styled.div`
  width: 400px;
  display: flex;
  gap:10px;
`;

export const ReasonsListIcon = styled.div`
  svg {
    font-size: 50px;
  }
`;
export const ReasonsListTitle = styled.div``;
export const ReasonsListInfo = styled.div``;

export const TestimonyWrapper = styled.div``;

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
  }
`;

