import styled from 'styled-components';
import {theme} from '../../themes'

export const TuitionAndFeesContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
  /* text-align: center; */
`;

export const TuitionAndFeesTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;

  h2 {
    text-align: center;
    text-transform: capitalize;
    font-size: 28px;
    color: #fff;
  }

  svg {
    font-size: 30px;
  }
`;

export const TuitionAndFeesTable = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    padding: 10px;
  }

  th {
    text-transform: capitalize;
    color: ${theme.color.mainColor};
    font-size: 20px;
  }

  td {
    text-transform: capitalize;

    h4 {
      padding-bottom: 5px;
      color: #fff;
    }

    h3 {
      display: none;
      color: #fff;
    }
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    border: none;

    .table-row {
      max-width: 400px;
      display: flex;
      flex-direction: column;
      border: 1px solid ${theme.color.pDesc};
      margin: 10px auto;
      border-radius: 10px;
    }
    th {
      display: none;
    }
    td {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: none;

      h3 {
        display: block;
        text-transform: capitalize;
        color: ${theme.color.mainColor};
        font-size: 20px;
      }
    }
  }
`;
