import React from 'react';
import * as Styles from './TechListsStyles';
import { Link } from 'react-router-dom';
const TechLists = ({ data, open }) => {
  const { techTitle, techPic, techFee, techDurations, techLink, } = data;

  const scrollToTop = () => {
   
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
  }

  return (
    <Styles.TechListContainer>
      <Styles.TechListContent>
        <Styles.TechListImgBox>
          <img src={techPic} alt='' />
        </Styles.TechListImgBox>
        <Styles.TechListDetails>
          <Styles.TechListRow>
            <Styles.TechListTitle>{techTitle}</Styles.TechListTitle>
          </Styles.TechListRow>
          <Styles.TechListRowBox>
            <Styles.TechListFee>{techFee}</Styles.TechListFee>
            <Styles.TechListDuration>{techDurations}</Styles.TechListDuration>
          </Styles.TechListRowBox>
          <Styles.TechListRow>
            <Styles.TechListViewButton onClick={open}>
              View course details
            </Styles.TechListViewButton>
          </Styles.TechListRow>
          <Styles.TechListRow>
            <Link to={`/payment/${techLink}`} onClick={scrollToTop}>
              <Styles.TechListJoinButton>
                Join the next cohort
              </Styles.TechListJoinButton>
            </Link>
          </Styles.TechListRow>
        </Styles.TechListDetails>
      </Styles.TechListContent>
    </Styles.TechListContainer>
  );
};

export default TechLists;
