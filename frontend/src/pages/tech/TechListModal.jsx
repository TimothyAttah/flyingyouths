import React from 'react';
import { FaTimes } from 'react-icons/fa';
import * as Styles from './TechListModalStyles';
import { Link } from 'react-router-dom';
const TechListModal = ({ data, close }) => {
  const {
    techTitle,
    techDescription,
    techPic,
    techFee,
    techDurations,
    techOutlines,
  } = data;

  let str = techTitle;
  let newLink = str.replace(/\s+/g, '-').toLowerCase();

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

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

        <Link to={`/payment/${newLink}`} onClick={scrollToTop}>
          <Styles.TechListJoinButton>
            Join the next cohort
          </Styles.TechListJoinButton>
        </Link>
      </Styles.TechListModalInfo>
    </Styles.TechListModalContainer>
  );
};

export default TechListModal;
