import styled from "styled-components";

export const ProgramsContainer = styled.div`
  margin: 0 auto;

`;
export const ProgramsInfoContainer = styled.div`
  max-width: 700px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 35px;
    padding-bottom: 10px;
    text-transform: capitalize;
  }

  p {
    font-size: 18px;
  }
`;
export const ProgramsListsContainer = styled.div`
  display: flex;
  justify-content: space-between
`;
export const Programs = styled.div`
  width: 350px;
  border: 2px solid #bbb;
  padding: 20px;
  margin-top: 20px;
  border-radius:5px;

  h4 {
    font-size: 22px;
    padding-bottom: 10px;
    text-transform: capitalize;
    text-align: center;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 18px;
    line-height: 30px;
    text-align: center;
  }

  button {
    width: 250px;
    height: 50px;
    margin: auto;
    display:block;
    background-color:#ccc;
    text-transform: capitalize;
    font-weight: bold;


  }
`;
// export const ProgramsContainer = styled.div``;
