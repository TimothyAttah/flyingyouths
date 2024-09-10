import React from 'react';
import * as Styles from './ReasonsStyles';
import { reasonsData } from './reasonsData';

const Reasons = () => {
  return (
    <Styles.ReasonsContainer>
      <Styles.ReasonsTitle>why EarnBigFromTech?</Styles.ReasonsTitle>
      <Styles.ReasonsListsContainer>
        {reasonsData.map((item, i) => (
          <Styles.ReasonsList>
            <Styles.ReasonsListIcon>{<item.icon />}</Styles.ReasonsListIcon>
            <Styles.ReasonsListInfo>
              <h4>{item.title}</h4>
              <p>{item.reason}</p>
            </Styles.ReasonsListInfo>
          </Styles.ReasonsList>
        ))}
      </Styles.ReasonsListsContainer>
    </Styles.ReasonsContainer>
  );
};

export default Reasons;
