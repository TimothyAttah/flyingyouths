import styled, { css } from 'styled-components';
import { theme } from '../../themes';

export const InputBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    flex-direction: column;
  }
`;

export const InputBox = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-sizing: border-box;

  input {
    border: none;
    margin: 0;
    height: 100%;
    ::placeholder {
      text-transform: capitalize;
    }
  }

  span {
    border-right: 1px solid #ced4da;
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) =>
    props.primary &&
    css`
      flex-direction: row-reverse;
      span {
        border-right: none;
        border-left: 1px solid #ced4da;
      }
    `}
  @media screen and (max-width: ${theme.screens.smallScreen}) {
    ${(props) =>
      props.primary &&
      css`
        flex-direction: row;
        span {
          border-right: 1px solid #ced4da;
          border-left: none;
        }
      `}
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;

    label {
      font-weight: 500;
      text-transform: capitalize;
    }

    input {
      margin: 0;
      padding: 0;
    }
  }
`;

export const PasswordInputBox = styled.div`
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;

  div:last-child {
    display: flex;
    justify-content: space-between;
    label {
      padding-right: 10px;
    }

    small {
      position: relative;
    }
  }

  small {
    position: absolute;
    bottom: 0;
    right: 0;
    text-transform: capitalize;
    text-decoration: underline;
    cursor: pointer;
    :hover {
      color: red;
    }
  }

  ${(props) => props.signIn && css``}
`;

export const SelectBox = styled.div`
  width: 100%;
  select {
    background-color: transparent;
    text-transform: capitalize;
    height: 50px;
    padding: 10px;

    /* color: aliceblue; */

    option {
      height: 40px;
      color: black;
    }
  }
`;

export const TermsAndConditions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    input {
      margin: 0;
      padding: 0;
    }
  }

  small {
    a {
      color: ${theme.color.mainColor};
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${theme.color.mainColor};
  color: ${theme.color.textLight};
  margin-top: 50px;
  border-radius: 10px;
  font-size: 20px;
`;

export const HeroButton = styled.div`
  all: unset;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #afaeae55; */
  /* padding: 10px 20px; */
  /* background-image: linear-gradient(to bottom, #eee1, transparent, #eee1); */
  transition: 0.5s;
  margin: 0 auto;
  margin-top: 12px;
  border: none;

  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    background-color: #333;
    background-color: #0d6efd;
    color: #fff;
    border-radius: 10px;
    border: none;
    transition: 0.5s;

    :hover {
      background-color: #c691e6;
      background-color: #0d6ade;
      background-color: #333;

      /* color: #040018; */
      /* box-shadow: 0 0 50px #c691e6; */
    }
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  width: 300px;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;

  align-items: center;
  label,
  input {
    display: block;
    padding: 0;
    margin: 0;
  }

  input {
    display: block;
    width: 40px;
    height: 30px;
    padding: 0;
    margin: 0;
  }

  label {
    font-size: 20px;
    padding: 0;
    margin: 0;
  }
`;

export const SmallLink = styled.small`
  text-align: center;
  display: block;
  font-size: 16px;
  margin-top: 30px;
  a {
    color: #0d6efd;
  }
`;
