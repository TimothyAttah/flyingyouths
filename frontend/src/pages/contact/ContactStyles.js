import styled from 'styled-components';
import { theme } from '../../themes';

export const ContactSection = styled.section`
  padding-top: 150px;
`;

export const SectionTitle = styled.div`
  text-align: center;
  /* margin-bottom: 45px; */
  font-size: 20px;
  text-transform: capitalize;
  /* margin: 0 0 15px; */
`;
export const Title = styled.span`
  display: inline-block;
  /* font-size: ${theme.fontSize.fs2xl}; */
  font-size: 25px;
  font-weight: 400;
  text-transform: capitalize;
  /* color: ${theme.color.textColor2}; */
  /* --to: left;
  background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191);
  color: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  margin: 0 0 12px;
  padding: 0 40px;
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 34px;
    /* background-color: white; */
    /* background-color: ${theme.color.textColor2}; */
    /* --to: right;
    background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191);
    color: #fff; */
    /* -webkit-background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
    top: 50%;
    transform: translateY(-50%);
    background-color:#000;
  }

  ::before {
    left: 0;
  }
  ::after {
    right: 0;
  }
`;
export const SubTitle = styled.h2`
  font-size: 35px;
  text-transform: capitalize;
  margin-bottom: 80px;
  color: #000;
`;

export const ContactSectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  padding: 10px;
  gap: 20px;
  /* border: 2px solid red; */

  @media screen and (max-width: 620px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactInfo = styled.div`
  max-width: 500px;
  /* border: 2px solid red; */

  div + div {
    /* margin-top: 20px; */
    /* border-top: 1px solid ${theme.color.textColor}; */
  }
`;
export const ContactInfoItem = styled.div`
  position: relative;
  padding: 20px 0 20px 70px;

  h3 {
    margin: 0 0 10px;
    /* font-size: ${theme.fontSize.fsxl}; */
    font-weight: 500;
    text-transform: capitalize;
  }

  p:last-child {
    margin: 0;
  }
`;

export const SvgBox = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 20px;
  /* --to: bottom;
  background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191);
  color: #000; */
  background-color: #0d6ade;
  background-color: #040018;
  color: #fff;
`;
export const ContactForm = styled.div`
  width: 500px;
  /* border: 2px solid red; */

  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const InputBox = styled.div`
  margin-bottom: 20px;
  /* border: 2px solid red; */
  /*  */
  input,
  textarea {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #afaeae55;
    background-color: transparent;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: #040018;
    padding: 0 20px;

    :focus {
      outline: 1px solid ${theme.color.textColor};
    }

    ::placeholder {
      color: #040018;
    }
  }
  textarea {
    display: block;
    height: 150px;
    padding-top: 15px;
    resize: none;
  }
`;

export const BtnWrap = styled.div`
  button {
    all: unset;
    /* border: 1px solid #afaeae55; */
    padding: 10px 20px;
    border-radius: 20px;
    /* background-image: linear-gradient(to bottom, #eee1, transparent, #eee1); */
    transition: 0.5s;
    background-color: #040018;
    color: #fff;

    :hover {
      background-color: #c691e6;
      color: #040018;
      box-shadow: 0 0 50px #c691e6;
    }
  }
`;
