import styled from 'styled-components';

export const FaqsContainerWrapper = styled.div`
  /* background: #1c1c1c;
  color: #fff; */
  /* background: linear-gradient(135deg, #03294700, rgb(34, 53, 30)); */
  padding-top: 100px;
`;

export const FaqsMainContainer = styled.div`
  max-width: 720px;
  padding: 20px;
  padding-top: 150px;
  margin: 0 auto;

  max-width: 900px;
  margin: auto;
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    text-align: center;
    font-size: 40px;
    text-transform: capitalize;
    font-family: cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .faqs.active .answer {
    max-height: 300px;
    animation: fade 1s ease-in-out;
  }

  .faqs.active svg {
    transform: rotate(180deg);
  }

  svg {
    transition: transform 0.5s ease-in;
    font-size: 25px;
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
export const Faqs = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ccc;
`;
export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 50px;
  cursor: pointer;

  h3 {
    font-size: 1.3rem;
  }
`;
export const Answer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 1.4s ease;
  p {
    padding-top: 1rem;
    line-height: 1.4;
    font-size: 1.1rem;
  }
`;

export const FaqsContainer = styled.div`
  max-width: 650px;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  h2 {
    font-size: 40px;
    text-transform: capitalize;
    font-family: cursive;
    color: #fff;
    text-align: center;
  }
`;

export const FaqTab = styled.div`
  position: relative;
  background: #fff;
  padding: 0 20px 20px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  overflow: hidden;

  :hover {
    label::after {
      color: #333;
    }
  }

  input {
    border: none;
    padding: 0;
    margin: 0;
    width: auto;
    appearance: none;
    :checked ~ label::after {
      transform: rotate(135deg);
      color: #fff;
    }

    :checked ~ div {
      max-height: 100vh;

      p {
        color: #fff;
        font-weight: bold;
      }
    }

    :checked ~ label h2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: rgba(255, 255, 255, 0.2);
      font-size: 8em;
      justify-content: flex-end;
      padding: 20px;
    }

    :checked ~ label h3 {
      background: #fff;
      padding: 2px 10px;
      color: #333;
      border-radius: 2px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    ::after {
      content: '+';
      position: absolute;
      right: 20px;
      font-size: 2em;
      color: rgba(0, 0, 0, 0.1);
      transition: transform 1s;
    }

    h2 {
      width: 40px;
      height: 40px;
      background: #333;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25em;
      border-radius: 5px;
    }

    h3 {
      max-width: 450px;
      position: relative;
      font-weight: 500;
      color: #333;
      z-index: 10;
      line-height: 1.4;
    }
  }

  :nth-child(2) label h2 {
    background: linear-gradient(135deg, #3e773e, #22351e);
  }

  :nth-child(3) label h2 {
    background: linear-gradient(135deg, #3c8ce7, #00eaff);
  }
  :nth-child(4) label h2 {
    background: linear-gradient(135deg, #ff96f9, #c32bac);
  }
  :nth-child(5) label h2 {
    background: linear-gradient(135deg, #fd6e6a, #ffc600);
  }
  :nth-child(6) label h2 {
    background: linear-gradient(135deg, #70f570, #49c628);
  }
  :nth-child(7) label h2 {
    background: linear-gradient(135deg, #ba6afd, #a628c6);
  }
  :nth-child(8) label h2 {
    background: linear-gradient(135deg, #e72e1b, #e74c3c);
  }
  :nth-child(9) label h2 {
    background: linear-gradient(135deg, #3498db, #09334f);
  }
  :nth-child(10) label h2 {
    background: linear-gradient(135deg, #655208, #f1c40f);
  }
  :nth-child(11) label h2 {
    background: linear-gradient(135deg, #616161, #432929eb);
  }
  :nth-child(12) label h2 {
    background: linear-gradient(135deg, #009688, #0a211e);
  }
  :nth-child(13) label h2 {
    background: linear-gradient(135deg, #8f3515, #5f4f4a);
  }
`;
export const FaqContent = styled.div`
  max-height: 0;
  transition: 1s;
  overflow: hidden;

  p {
    position: relative;
    padding: 10px 0;
    color: #333;
    z-index: 10;
  }
`;
