import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  padding: 20px;
  border-radius: 5px;
`;

export const PaymentFormInfo = styled.div`
  text-align: center;
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
    line-height: 23px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const PaymentAccountDetails = styled.div`
  margin-top: 20px;

  /* p:last-child {
    text-align: center;
  } */

  div {
    display: flex;
  }

  div p {
    width: 100px;
    font-weight: bold;
  }

  div span {
    font-weight: bold;
  }
`;
export const PaymentForm = styled.form`
  width: 100%;
  border: 1px solid gray;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
`;
export const PaymentFormInputBoxWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  /* @media screen and (max-width: 450px){
    flex-direction: column;
  } */
`;

export const PaymentFormInputBox = styled.div`
  /* max-width: 200px; */
  width: 100%;
  input,
  label {
    width: 100%;
  }

  label {
    color: #000;
    font-weight: 500;
    font-size: 10px;
  }

  input {
    font-size: 10px;
  }
`;

export const PaymentFormButton = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background-color: darkgreen;
  color: #fff;
  margin: 0 auto;
  display: block;
`;
