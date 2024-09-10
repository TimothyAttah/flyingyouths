import styled from 'styled-components';
import bg from '../../assets/student6.png';

export const ProgramsContainer = styled.div``;

export const ProgramsHeroContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  /* padding-top:20%; */
  height: 80vh;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;


`;



export const ProgramsHeroInfoContainer = styled.div`
  width: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: right;
  background-color: transparent;
  padding: 100px;
  /* height: 100%; */


`;

export const ProgramsInfoContainer = styled.div`
  max-width: 500px;
  background-color:#12111185;
  color:#fff;
  padding: 20px;
  border-radius:10px;

  h1 {
    color:#fff;
    font-size: 45px;

    span {
      color: purple;
    }
  }

  p {
    font-size: 12px;
  }

  button {
    width: 200px;
    background-color:blue;
    color:#fff;
    height: 40px;
  }

`;

export const ProgramsCareerPathContainer = styled.div``;
export const ProgramsStrategyContainer = styled.div``;
export const ProgramsListsContainer = styled.div``;
export const ProgramsDetailsContainer = styled.div``;
export const ProgramsPaymentContainer = styled.div``;
