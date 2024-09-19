import React from 'react';
import * as Styles from './TechListsStyles';
const TechLists = ({ data, open }) => {
  const { techTitle, techPic, techFee, techDurations } = data;
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
            <Styles.TechListJoinButton>
              Join the next cohort
            </Styles.TechListJoinButton>
          </Styles.TechListRow>
        </Styles.TechListDetails>
      </Styles.TechListContent>
    </Styles.TechListContainer>
  );
};

export default TechLists;
