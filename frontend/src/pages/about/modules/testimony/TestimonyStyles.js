import styled from "styled-components";


export const TestimonyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 0;
`

export const TestimonyOptionContainer = styled.div`
  display: flex;
`;

export const TestimonyInfoContainer = styled.div`
  width: 500px;

  h2 {
    font-size: 32px;
    padding-bottom: 20px;
  }

  p {
    font-size: 18px;
  }
`;
export const TestimonyVideoContainer = styled.div`
  width: 500px;
  h2 {
    text-transform: uppercase;
    padding-bottom: 10px;
    text-align: center;
  }
`;
export const TestimonyVideo = styled.div`
  width: 100%;
  video {
    width: 100%;
  }
`;
