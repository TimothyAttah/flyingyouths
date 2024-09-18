import React from 'react';
import { reasonsData } from '../reasons/reasonsData';
import * as Styles from './testimonyStyles';
import pix1 from '../../../../assets/promise.png';
import pix2 from '../../../../assets/dan.png';
import { Link } from 'react-router-dom';

export const Testimony = () => {
  return (
    <>
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
      <div id='programs'>
        <h2
          style={{
            textAlign: 'center',
            marginTop: '20px',
            backgroundColor: '#333',
            color: '#fff',
            width: '100%',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Courses available
        </h2>
        <div style={{ padding: '10px 20px' }}>
          <div>
            <h3>1. Full-Stack Web Development (MERN)</h3>
            <div>
              The class is 3times weekly We teach front end and Back end which
              include Html5, Css3, JavaScript, ReactJs, Expressjs, NodeJs,
              MongoDb all these makes anyone a good full MERN Developer.
            </div>
            <div>
              <h5>course outline</h5>
              <small> Duration: 4 months</small>
              <small>Course FEE: N400,000</small>
              <div>
                <h6>FRONT END Modules</h6>
                <p>Introduction to Web Development (HTML Basics)</p>
                <p> Styling Websites with CSS (Layouts, Flexbox, Grid)</p>
                <p>JavaScript Basics (DOM Manipulation, Events)</p>
                <p>Advanced JavaScript (ES6+, APIs, Fetch)</p>
                <p>Introduction to Front-End Frameworks (React Basics)</p>
                <p>Building a React Project (Components, State Management)</p>
                <p>
                  Version Control with Git and GitHub Deploying Websites
                  (Netlify, GitHub Pages)
                </p>
                <p>
                  Project: Build a responsive portfolio website using React and
                  host it online.
                </p>
                <h6>Backend Development with Node.js Modules</h6>
                <p>Introduction to Nodejs course</p>
                <p>Learn express</p>
                <p>Body parser, middleware</p>
                <p>Moving to big stack project</p>
                <p>move to Mongodb</p>
                <p>Bigstack Major Project - login routes and tokens</p>
                <p>Bigstack Major Project working on user profile</p>
                <p>
                  Building a Server: Build a server with the Express framework.
                  You'll learn how APIs are architected and create and use
                  middleware for expanded functionality.
                </p>
              </div>
            </div>

            <div>
              {/* <h4>Backend Development with Node.js</h4>
              <h5>course outline</h5>
              <p>
                Foundations of Backend Development: Discover the tools that make
                backend development possible. You'll learn how those tools are
                used throughout the course and how they'll set you up to write
                clear, maintainable code.
              </p>
              <p>
                Getting Started with Node.JS: Learn how JavaScript is used
                serverside with Node.js. You'll work with the tools Node.js
                provides as well as integrate third-party packages to create the
                backend for your applications.
              </p> */}
              {/* <p>
                Developing with TypeScript: Take advantage of strict typing by
                learning to write TypeScript, one of the most popular for
                application development. You'll write code in a way that reduces
                errors and expresses your intentions.
              </p> */}
              {/* <p>
                Unit Testing with Jasmine: Explore the software development
                testing paradigm. You'll learn how Jasmine can be used as a
                Test-Driven Development framework for writing server-side unit
                tests to create bug-free maintainable code.
              </p> */}
              {/* <p>
                Building a Server: Build a server with the Express framework.
                You'll learn how APIs are architected and create and use
                middleware for expanded functionality. Finally, you'll learn to
                read and write to the file system.
              </p> */}
              {/* <p>
                Image Processing API Create an API that takes advantage of all
                the tools you have learned in this course. You'll create an
                image processing API that resizes and saves images to user
                specifications when visiting a URL
              </p> */}
            </div>
          </div>
          <div>
            <h3>2. App Development:</h3>
            <p>
              Learning mobile app development (using Swift for iOS or Kotlin for
              Android) is highly marketable, especially with the demand for
              custom apps.
            </p>
            <div>
              <h5>course outline</h5>
              <small> Duration: 5 months</small>
              <small>Course FEE: N500,000</small>
              <p> . Introduction to Mobile App Development (iOS vs Android)</p>
              <p> . Swift Basics (Variables, Control Flow, Functions)</p>
              <p>. Kotlin Basics (Syntax, Data Types, OOP)</p>
              <p>. UI/UX Design for Mobile Apps</p>
              <p>. Working with APIs in Apps (Fetching Data, Parsing JSON)</p>
              <p>
                . Advanced Swift/Kotlin Concepts (Animation, Gesture
                Recognition)
              </p>
              <p> . State Management in Apps (Data Binding, Reactivity)</p>
              <p>
                . Introduction to Flutter/React Native (Cross-Platform Apps)
              </p>
              <p> . Testing and Debugging Mobile Apps</p>
              <p> . Deploying to App Store/Play Store</p>
              <p>
                Final Project: Build a basic mobile app (like a weather or to-do
                app).
              </p>
            </div>
          </div>
          <div>
            <h3>3. Graphic Design:</h3>
            <p>
              Tools like Adobe Photoshop, Illustrator, or Figma are valuable for
              design projects, logo creation, or social media content.
            </p>
            <div>
              <h5>course outline</h5>
              <small> Duration: 3 months</small>
              <small>Course FEE: N350,000</small>
              <p>
                . Introduction to Graphic Design (Design Principles, Color
                Theory)
              </p>
              <p> . Adobe Photoshop Basics (Tools, Layers, Effects)</p>
              <p>. Illustrator and Vector Graphics (Shapes, Typography)</p>
              <p> . Designing for Social Media (Posts, Banners, Logos)</p>
              <p> . UI Design with Figma (User Interface Design with Figma)</p>
              <p>
                . Freelancing as a Graphic Designer (Creating a Portfolio,
                Pricing)
              </p>
              <p>
                Final Project: Design a brand kit (logo, social media templates,
                and a business card).
              </p>
            </div>
          </div>
          <div>
            <h3>4. Video Editing:</h3>
            <p>
              Learning software like Adobe Premiere Pro or Final Cut Pro allows
              you to offer video editing services for YouTube channels or social
              media influencers.
            </p>
            <div>
              <h5>course outline</h5>
              <small> Duration: 3 months</small>
              <small>Course FEE: N350,000</small>

              <p>
                . Introduction to Video Editing (Understanding the Editing
                Process)
              </p>
              <p>
                . Adobe Premiere Pro Basics (Cutting, Trimming, Transitions)
              </p>
              <p> . Adding Effects and Animations (After Effects Basics)</p>
              <p>. Audio Editing (Syncing, Effects, Background Music)</p>
              <p> . Color Correction and Grading</p>
              <p>. Exporting and Delivery (Different Formats, Compression)</p>
              <p>
                Final Project: Edit a short YouTube video or social media ad.
              </p>
            </div>
          </div>
          <div>
            <h3>5. Digital Marketing:</h3>
            <p>
              Understanding SEO, content marketing, social media management, and
              PPC ads can open opportunities for managing businesses' online
              presence.
            </p>
            <div>
              <h5>course outline</h5>
              <small> Duration: 4 months</small>
              <small>Course FEE: N350,000</small>

              <p>
                . Introduction to Digital Marketing (SEO, Content Marketing,
                PPC)
              </p>
              <p>
                . Basics of Search Engine Optimization (On-Page, Off-Page,
                Keywords)
              </p>
              <p>
                . Social Media Marketing (Creating Campaigns, Ads on
                Facebook/Instagram)
              </p>
              <p>. Google Ads and PPC Campaigns (Keyword Research, Bidding)</p>
              <p>. Email Marketing (Mailchimp, Campaigns, Automations)</p>
              <p>
                . Analytics and Tracking (Google Analytics, KPIs, A/B Testing)
              </p>
              <p>
                . Content Creation (Blogging, Vlogging, Influencer Marketing)
              </p>
              <p>
                . Building a Marketing Portfolio (Case Studies, Reporting) Final
                Project: Run a small ad campaign on Google Ads and social media.
              </p>
            </div>
          </div>
          <div>
            <h3>6. Game Development:</h3>
            <p>
              Using platforms like Unity or Unreal Engine, you can create and
              sell your own games or take on freelance game development
              projects.
            </p>
            <div>
              <h5>course outline</h5>
              <small> Duration: 5months</small>
              <small>Course FEE: N650,000</small>

              <p>. Introduction to Game Development (Concepts, Platforms)</p>
              <p>
                . Getting Started with Unity (Interface, Assets, Scene Building)
              </p>
              <p>
                . Introduction to C# for Unity (Scripting, Variables, Loops)
              </p>
              <p>. Physics and Animation in Games</p>
              <p>. Game Mechanics (Player Controls, Movement, Interactions)</p>
              <p> . Designing Levels and UI</p>
              <p>. Adding Sound Effects and Music</p>
              <p>. Testing, Debugging, and Optimization</p>
              <p>. Multiplayer Game Development</p>
              <p>
                . Publishing Games on App Stores/Steam Final Project: Build a
                simple 2D game (like a platformer).
              </p>
            </div>
          </div>
          <div>
            <h3>7. Blockchain Development:</h3>
            <p>
              With the rise of cryptocurrencies and decentralized applications,
              we will teach you thoroughly and you can explore blockchain
              programming to work on projects or startups in this space.
            </p>
            <div>
              <h5>course outline</h5>
              <small> Duration: 5 months</small>
              <small>Course FEE: N1,250,000</small>

              <p> Introduction to Blockchain Technology</p>
              <p> Blockchain Basics (Decentralization, Cryptography)</p>
              <p> Smart Contracts with Solidity</p>
              <p> Ethereum Blockchain (Gas, Transactions)</p>
              <p> Decentralized Applications (DApps)</p>
              <p> Building Smart Contracts</p>
              <p> Testing and Deploying DApps</p>
              <p> Introduction to NFTs (Non-Fungible Tokens)</p>
              <p> Blockchain Security and Best Practices</p>
              <p>Monetizing Blockchain Projects (Freelancing, Crowdfunding)</p>
              <p>Final Project: Create a simple DApp or NFT smart contract.</p>
            </div>
          </div>
          <div>
            <h3>8. Cybersecurity:</h3>
            <p>
              With a growing need for security, learning cybersecurity
              principles can lead to jobs in ethical hacking, penetration
              testing, or security auditing.
            </p>
            <div>
              <h5>course outline</h5>
              <small> Duration: 3months</small>
              <small>Course FEE: N350,000</small>

              <p> Introduction to Cybersecurity (Threats, Vulnerabilities)</p>
              <p> Understanding Networks and Web Security</p>
              <p> Ethical Hacking Basics (Tools, Penetration Testing)</p>
              <p> Securing Websites and Applications</p>
              <p> Encryption and Cryptography Basics</p>
              <p> Malware, Phishing, and Social Engineering Attacks</p>
              <p> Security Auditing and Compliance</p>
              <p> Freelancing as a Cybersecurity Consultant</p>
              <p>
                Final Project: Perform a security audit of a small website or
                app.
              </p>
            </div>
          </div>
          <div>
            <h3> 9. 3D Modeling and Animation:</h3>
            <p>
              learning Blender or Autodesk Maya software will give you
              opportunity to work in animations, architecture, or game design.
            </p>
            <div>
              <h5>course outline</h5>
              <small> Duration: 5 months</small>
              <small>Course FEE: N650,000</small>

              <p>. Introduction to 3D Modeling (Basics of Blender)</p>
              <p> . Creating Simple 3D Objects (Shapes, Modifiers)</p>
              <p> . Advanced Modeling (Organic Shapes, Texturing)</p>
              <p> . Introduction to Animation (Keyframes, Timeline)</p>
              <p> . Lighting and Rendering in 3D Scenes</p>
              <p> . Character Modeling and Rigging</p>
              <p> . Particle Systems and Effects</p>
              <p>. Game Asset Creation</p>
              <p>. Exporting Models for Games/Animations</p>
              <p>. Freelancing in 3D Modeling/Animation</p>
              <p>Final Project: Model and animate a 3D character or object.</p>
            </div>
          </div>
          <div>
            <h3>
              10. Artificial Intelligence (AI) and Machine Learning Course :
            </h3>
            <p>
              Explore AI tools, data science, and automation which help you in
              building innovative solutions or freelance data analysis projects.
            </p>
            <div>
              <h5>course outline</h5>
              <small> Duration: 6 months</small>
              <small>Course FEE: N1,750,000</small>

              <p> Introduction to AI and Machine Learning Concepts</p>
              <p> Python for Machine Learning (Pandas, Numpy)</p>
              <p> Data Preprocessing and Cleaning</p>
              <p> Supervised Learning (Linear Regression, Classification)</p>
              <p>
                Unsupervised Learning (Clustering, Dimensionality Reduction)
              </p>
              <p>
                Introduction to Neural Networks (Basic Concepts, TensorFlow)
              </p>
              <p> Deep Learning (Convolutional Neural Networks)</p>
              <p> Natural Language Processing (NLP) Basics</p>
              <p> Model Evaluation and Tuning</p>
              <p> AI Ethics and Data Privacy</p>
              <p> Building AI Projects (Automation, Data Prediction)</p>
              <p> Deploying AI Models</p>
              <p>
                Final Project: Create an AI project (like a chatbot or image
                classifier).
              </p>
            </div>
          </div>
          <div>
            <h3> 11. Content Creation:</h3>
            <p>
              For those who want to Start a YouTube channel, podcast, or blog on
              a topic of interest can become a source of income through ad
              revenue, sponsorships, and affiliate marketing.
            </p>
            <div>
              <h5>course outline</h5>
              <small> Duration: 6 months</small>
              <small>Course FEE: N320,000</small>

              <p>
                Introduction to Content Creation (Platforms, Niche Selection)
              </p>
              <p> Creating Engaging Videos (Scripting, Filming, Editing)</p>
              <p>
                Building an Audience (SEO for YouTube, Social Media Strategy)
              </p>
              <p> Monetization Strategies (Ad Revenue, Sponsorships)</p>
              <p> Branding and Collaborations</p>
              <p> Analytics and Growth Strategies</p>
              <p>
                Final Project: Launch a YouTube channel or a blog with at least
                3 content pieces.
              </p>
            </div>
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </div>
      <Styles.EnrollWrapper>
        <h2>Your time is now</h2>
        <p>
          Register today to be part of our next batch starting on 20th
          September, 2024.
        </p>
        <div
          style={{
            display: 'flex',
            width: '400px',
            margin: '0 auto',
            gap: '20px',
          }}
        >
          <Styles.HeroButton>
            <Link to='/students/register'>
              <button>apply now</button>
            </Link>
          </Styles.HeroButton>
          <Styles.HeroButton>
            <Link to='/students/register'>
              <button>Speak to our team</button>
            </Link>
          </Styles.HeroButton>
        </div>
      </Styles.EnrollWrapper>
      <Styles.TestimonyWrapper>
        <h2>Hear what our students says: Testimony</h2>
        <div>
          <Styles.TestimonyName>
            <Styles.TestimonyImg>
              <img src={pix1} alt='' />
            </Styles.TestimonyImg>
            <>Promise Osasu .E</>
          </Styles.TestimonyName>
          <p>
            I recently completed my full stack web development training at Enoch
            Louis coding Bootcamp and I am happier with my choice and
            experience. The instructor is very supportive and very intelligent I
            have so much respect for him, The workload was challenging but very
            rewarding. I learnt so so much in a very short amount of time and
            I'm confident in my ability to build fully responsive full stack
            applications. If you're looking to go into tech, I highly recommend
            EBT powered by Enoch Louis coding Bootcamp
          </p>
        </div>
        <div>
          <Styles.TestimonyName>
            <Styles.TestimonyImg>
              <img src={pix2} alt='' />
            </Styles.TestimonyImg>
            <>Daniel Shobowale .O</>
          </Styles.TestimonyName>

          <p>
            "EBT coding bootcamp is more than just a learning experience- It's a
            transformative journey into the world of technology. They pride us
            on offering an immersive, hands-on curriculum that equips our
            students with skills needed to excel in tech industry. With expert
            instructors, personalized mentorship, and a focus on real-world
            applications, they ensure that every participant leaves not only
            with knowledge but with the confidence to launch a successful
            career. Join us and be part of a community that fosters innovation,
            collaboration, and growth."
          </p>
        </div>
      </Styles.TestimonyWrapper>
    </>
  );
};
