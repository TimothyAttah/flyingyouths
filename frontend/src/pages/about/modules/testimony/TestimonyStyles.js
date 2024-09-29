import styled from "styled-components";


export const TestimonyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px;
  gap: 20px;
  font-family: 'Lato', sans-serif;
  flex-wrap: wrap;
  text-align: center;
`;

export const TestimonyOptionContainer = styled.div`
  display: flex;
`;

export const TestimonyInfoContainer = styled.div`
  width: 500px;

  h2 {
    font-size: 32px;
    padding-bottom: 20px;
    color: #040018;
    /* text-align: center; */
  }

  p {
    font-size: 18px;
    color: #040018;
  }
`;
export const TestimonyVideoContainer = styled.div`
  width: 500px;
  h2 {
    text-transform: uppercase;
    padding-bottom: 10px;
    text-align: center;
    color: #040018;
  }
`;
export const TestimonyVideo = styled.div`
  width: 100%;
  video {
    width: 100%;
    height: 500px;
  }
`;
