import styled from "styled-components";

export const PaymentFeeCardContainer = styled.div`
  h4, p {
    padding: 0;
    margin: 0;
  }
`;
export const PaymentFeeCardTitle = styled.h4`
  text-align: center;
  padding: 0;
  margin: 0;
  span {
    color: blue;
  }
`;

export const PaymentFeeCardName = styled.h2`
  text-align: center;
`;

export const PaymentFeeCard = styled.div`
  padding: 10px 0;
  /* box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.9); */
  /* margin-top: 10px; */
`;

export const PaymentFeeCardBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fff;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const PaymentFeeCardBox = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.9);
  padding: 10px;
  gap:5px;
  border-radius: 5px;
`;

export const PaymentFeeType = styled.p`
  text-align: center;
  padding-bottom: 5px;
`;

export const PaymentInitialFee = styled.p`
  text-align: center;
  text-decoration: line-through;
  padding: 5px 0;
`;

export const PaymentFee = styled.h3`
  text-align: center;
`;

export const PaymentCourseClasses = styled.small`
  text-align: center;
  font-size: 10px;
  line-height: 15px;
  /* padding: 5px 0; */
`;

export const PaymentCourseDuration = styled.small`
  text-align: center;
  font-size: 10px;
`;

export const PaymentDecision = styled.small`
  text-align: center;
  font-size: 10px;
  width: 100%;
  height: 20px;
`;

export const PaymentButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 50px;
  background-color: navy;
  color:#fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  margin-top: 10px;
`;
