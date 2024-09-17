import React from 'react';
import * as Styles from './ReasonsStyles';
import { reasonsData } from './reasonsData';
import Dan from '../../../../assets/dan.png';
import Promise from '../../../../assets/promise.png';


export const ReasonsPage = () => {
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

      <div>
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
          Courses available
        </h2>
        <div style={{ padding: '10px 20px' }}>
          <div>
            <h4>Full-Stack Web Development (MERN)</h4>
            <div>
              The class is 3times weekly We teach front end and Back end which
              include Html5, Css3, JavaScript, ReactJs, Expressjs, NodeJs,
              MongoDb all these makes anyone a good full MERN Developer.
            </div>
          </div>
          <div>
            <h4>Data analysis</h4>
          </div>
          <div>
            <h4>Social media management</h4>
          </div>

          <div>
            <h4>Advance Microsoft Word and Excel</h4>
          </div>
          <div>
            <h4>Video And Audio Editing</h4>
          </div>
        </div>
      </div>
      <div>
        <Styles.TestimonyName>
          <Styles.TestimonyImg>
            <img src={Promise} alt='' />
          </Styles.TestimonyImg>
          <>Promise Osasu .E</>
        </Styles.TestimonyName>
        <p>
          I recently completed my full stack web development training at Enoch
          Louis coding Bootcamp and I am happier with my choice and experience.
          The instructor is very supportive and very intelligent I have so much
          respect for him, The workload was challenging but very rewarding. I
          learnt so so much in a very short amount of time and I'm confident in
          my ability to build fully responsive full stack applications. If
          you're looking to go into tech, I highly recommend EBT powered by
          Enoch Louis coding Bootcamp
        </p>
      </div>

      <div>
        <Styles.TestimonyName>
          <Styles.TestimonyImg>
            <img src={Dan} alt='' />
          </Styles.TestimonyImg>
          <>Daniel Shobowale .O</>
        </Styles.TestimonyName>

        <p>
          "EBT coding bootcamp is more than just a learning experience- It's a
          transformative journey into the world of technology. They pride us on
          offering an immersive, hands-on curriculum that equips our students
          with skills needed to excel in tech industry. With expert instructors,
          personalized mentorship, and a focus on real-world applications, they
          ensure that every participant leaves not only with knowledge but with
          the confidence to launch a successful career. Join us and be part of a
          community that fosters innovation, collaboration, and growth."
        </p>
      </div>
    </Styles.ReasonsContainer>
  );
};

// export default Reasons;
