import React from 'react';
import * as Styles from './AboutProgramsStyles';

const Programs = () => {
  return (
    <Styles.ProgramsContainer>
      <Styles.ProgramsInfoContainer>
        <h2>our programs</h2>
        <p>
          Developed in collaboration with leading professionals in the tech
          industry, your programs prepare you to become a professional in the
          tech industry and allow you to create a diverse portfolio of projects
          to show employers.
        </p>
      </Styles.ProgramsInfoContainer>
      <Styles.ProgramsListsContainer>
        <Styles.Programs>
          <h4>tech school</h4>
          <p>
            Get started in the in-demand tech field by joining one of our tech
            school tracks and gain practical knowledge and experience in
            building real technical skills in an instructor led virtual class.
          </p>
          <button>register for tech school</button>
        </Styles.Programs>
        <Styles.Programs>
          <h4>design school</h4>
          <p>
            In this sequence of 2 high in-demand tech skills namely; Graphics &
            Product design, you are taken on a journey to becoming a user
            designer either as a practising Graphics designer or as a UI/UX
            designer in an instructor led hybrid learning mode.
          </p>
          <button>register for design school</button>
        </Styles.Programs>
        <Styles.Programs>
          <h4>EarnBigWithTech Online Academy</h4>
          <p>
            EarnBigWithTech Online presents an opportunity to learn a high
            in-demand tech skill in a fully virtual mode with weekly program
            meetups and instructor feedback.
          </p>
          <button>get started today</button>
        </Styles.Programs>
      </Styles.ProgramsListsContainer>
    </Styles.ProgramsContainer>
  );
};

export default Programs;
