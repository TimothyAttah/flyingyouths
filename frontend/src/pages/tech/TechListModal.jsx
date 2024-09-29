import React from 'react';
import { FaTimes } from 'react-icons/fa';
import * as Styles from './TechListModalStyles';
const TechListModal = ({ data, close }) => {
  const {
    techTitle,
    techDescription,
    techPic,
    techFee,
    techDurations,
    techOutlines,
  } = data;
  return (
    <Styles.TechListModalContainer onClick={(e) => e.stopPropagation()}>
      <Styles.TechListModalImg>
        <img src={techPic} alt='' />
      </Styles.TechListModalImg>
      <Styles.TechListModalInfo>
        <Styles.TechListModalTitle>{techTitle}</Styles.TechListModalTitle>
        <Styles.TechListModalDesc>{techDescription}</Styles.TechListModalDesc>
        <Styles.TechListModalBox>
          <Styles.TechListModalPrice>{techFee}</Styles.TechListModalPrice>
          <Styles.TechListModalDuration>
            {techDurations}
          </Styles.TechListModalDuration>
        </Styles.TechListModalBox>
        <Styles.TechListModalOutline>
          <h4>What you will learn</h4>
          <ul>
            {techOutlines.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Styles.TechListModalOutline>
        <Styles.TechListModalCloseButton onClick={close}>
          <FaTimes />
        </Styles.TechListModalCloseButton>
      </Styles.TechListModalInfo>
    </Styles.TechListModalContainer>
  );
};

export default TechListModal;
