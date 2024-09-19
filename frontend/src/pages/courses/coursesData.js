import webPix from '../../assets/tech-web.jpg'
import appPix from '../../assets/tech-app.jpg';
import graphicPix from '../../assets/tech-graphic.jpg';
import videoPix from '../../assets/tech-video.jpg';
import digitalPix from '../../assets/tech-digital.jpg';
import gamePix from '../../assets/tech-game.jpg';
import blockchainPix from '../../assets/tech-blockchain.jpg';
import cybersecurityPix from '../../assets/tech-cybersecurity.jpg';
import modelingPix from '../../assets/tech-3d.jpg';
import aiPix from '../../assets/tech-ai.jpg';
import contentPix from '../../assets/tech-content.jpg';






export const coursesData = [
  {
    courseTitle: 'Full-Stack Web Development (MERN)',
    courseDescription:
      'The class is 3times weekly We teach front end and Back end which include Html5, Css3, JavaScript, ReactJs, Expressjs, NodeJs, MongoDb all these makes anyone a good full MERN Developer.',
    coursePic: `${webPix}`,
    courseFee: '400,000',
    courseDurations: '4 Months',
    courseOutlines: [
      'Introduction to Web Development (HTML Basics)',
      'Styling Websites with CSS (Layouts, Flexbox, Grid)',
      'JavaScript Basics (DOM Manipulation, Events)',
      'Advanced JavaScript (ES6+, APIs, Fetch)',
      'Introduction to Front-End Frameworks (React Basics)',
      'Building a React Project (Components, State Management)',
      'Version Control with Git and GitHub Deploying Websites (Netlify, GitHub Pages)',
      'Project: Build a responsive portfolio website using React and host it online.',
      'Introduction to Nodejs',
      'Learn express',
      'Body parser, middleware',
      'Moving to big stack project',
      'move to Mongodb',
      'Bigstack Major Project - login routes and tokens',
      'Bigstack Major Project working on user profile',
      "Building a Server: Build a server with the Express framework. You'll learn how APIs are architected and create and use middleware for expanded functionality.",
    ],
    // courseOutlineFrontend: {
    //   courseOutlineTitle: 'Frontend Outline',
    // },
    // courseOutlineBackend: {
    //   courseOutlineTitle: 'Backend Outline',
    //   courseOutlines: [
    //     'Introduction to Nodejs',
    //     'Learn express',
    //     'Body parser, middleware',
    //     'Moving to big stack project',
    //     'move to Mongodb',
    //     'Bigstack Major Project - login routes and tokens',
    //     'Bigstack Major Project working on user profile',
    //     "Building a Server: Build a server with the Express framework. You'll learn how APIs are architected and create and use middleware for expanded functionality.",
    //   ],
    // },
  },
  {
    courseTitle: ' App Development',
    courseDescription:
      'Learning mobile app development (using Swift for iOS or Kotlin for Android) is highly marketable, especially with the demand for custom apps.',
    coursePic: `${appPix}`,
    courseFee: '500,000',
    courseDurations: '5 Months',
    courseOutlines: [
      'Introduction to Mobile App Development (iOS vs Android)',
      'Swift Basics (Variables, Control Flow, Functions)',
      'Kotlin Basics (Syntax, Data Types, OOP)',
      'UI/UX Design for Mobile Apps',
      'Working with APIs in Apps (Fetching Data, Parsing JSON)',
      'Advanced Swift/Kotlin Concepts (Animation, Gesture Recognition)',
      'State Management in Apps (Data Binding, Reactivity)',
      'Introduction to Flutter/React Native (Cross-Platform Apps)',
      'Testing and Debugging Mobile Apps',
      'Deploying to App Store/Play Store',
      'Final Project: Build a basic mobile app (like a weather or to-do app).',
    ],
  },
  {
    courseTitle: ' Graphic Design',
    courseDescription:
      'Tools like Adobe Photoshop, Illustrator, or Figma are valuable for design projects, logo creation, or social media content.',
    coursePic: `${graphicPix}`,
    courseFee: '350,000',
    courseDurations: '3 Months',
    courseOutlines: [
      'Introduction to Graphic Design (Design Principles, Color Theory)',
      'Adobe Photoshop Basics (Tools, Layers, Effects)',
      'Illustrator and Vector Graphics (Shapes, Typography)',
      'Designing for Social Media (Posts, Banners, Logos)',
      'UI Design with Figma (User Interface Design with Figma)',
      'Freelancing as a Graphic Designer (Creating a Portfolio, Pricing)',
      'Final Project: Design a brand kit (logo, social media templates, and a business card).',
    ],
  },
  {
    courseTitle: 'Video Editing',
    courseDescription:
      'Learning software like Adobe Premiere Pro or Final Cut Pro allows you to offer video editing services for YouTube channels or social media influencers.',
    coursePic: `${videoPix}`,
    courseFee: '350,000',
    courseDurations: '3 Months',
    courseOutlines: [
      'Introduction to Video Editing (Understanding the Editing Process)',
      'Adobe Premiere Pro Basics (Cutting, Trimming, Transitions)',
      'Adding Effects and Animations (After Effects Basics)',
      'Audio Editing (Syncing, Effects, Background Music)',
      'Color Correction and Grading',
      'Exporting and Delivery (Different Formats, Compression)',
      'Final Project: Edit a short YouTube video or social media ad.',
    ],
  },
  {
    courseTitle: 'Digital Marketing',
    courseDescription:
      "Understanding SEO, content marketing, social media management, and PPC ads can open opportunities for managing businesses' online presence.",
    coursePic: `${digitalPix}`,
    courseFee: '350,000',
    courseDurations: '4 Months',
    courseOutlines: [
      'Introduction to Digital Marketing (SEO, Content Marketing, PPC)',
      'Basics of Search Engine Optimization (On-Page, Off-Page, Keywords)',
      'Social Media Marketing (Creating Campaigns, Ads on Facebook/Instagram)',
      'Google Ads and PPC Campaigns (Keyword Research, Bidding)',
      'Email Marketing (Mailchimp, Campaigns, Automations)',
      'Analytics and Tracking (Google Analytics, KPIs, A/B Testing)',
      ' Content Creation (Blogging, Vlogging, Influencer Marketing)',
      'Building a Marketing Portfolio (Case Studies, Reporting) Final Project: Run a small ad campaign on Google Ads and social media.',
    ],
  },
  {
    courseTitle: 'Game Development',
    courseDescription:
      'Using platforms like Unity or Unreal Engine, you can create and sell your own games or take on freelance game development projects.',
    coursePic: `${gamePix}`,
    courseFee: '650,000',
    courseDurations: '5 Months',
    courseOutlines: [
      ' Introduction to Game Development (Concepts, Platforms)',
      ' Getting Started with Unity (Interface, Assets, Scene Building)',
      'Physics and Animation in Games',
      'Game Mechanics (Player Controls, Movement, Interactions)',
      'Designing Levels and UI',
      'Adding Sound Effects and Music',
      'Testing, Debugging, and Optimization',
      'Multiplayer Game Development',
      'Publishing Games on App Stores/Steam Final Project: Build a simple 2D game (like a platformer).',
    ],
  },
  {
    courseTitle: 'Blockchain Development',
    courseDescription:
      'With the rise of cryptocurrencies and decentralized applications, we will teach you thoroughly and you can explore blockchain programming to work on projects or startups in this space.',
    coursePic: `${blockchainPix}`,
    courseFee: '1,250,000',
    courseDurations: '5 Months',
    courseOutlines: [
      'Introduction to Blockchain Technology',
      ' Blockchain Basics (Decentralization, Cryptography)',
      'Smart Contracts with Solidity',
      'Ethereum Blockchain (Gas, Transactions)',
      'Decentralized Applications (DApps)',
      'Building Smart Contracts',
      'Testing and Deploying DApps',
      'Introduction to NFTs (Non-Fungible Tokens)',
      'Blockchain Security and Best Practices',
      'Monetizing Blockchain Projects (Freelancing, Crowdfunding)',
      'Final Project: Create a simple DApp or NFT smart contract.',
    ],
  },
  {
    courseTitle: 'Cybersecurity',
    courseDescription:
      'With a growing need for security, learning cybersecurity principles can lead to jobs in ethical hacking, penetration testing, or security auditing.',
    coursePic: `${cybersecurityPix}`,
    courseFee: '350,000',
    courseDurations: '3 Months',
    courseOutlines: [
      'Introduction to Cybersecurity (Threats, Vulnerabilities)',
      ' Understanding Networks and Web Security',
      'Ethical Hacking Basics (Tools, Penetration Testing)',
      'Securing Websites and Applications',
      'Encryption and Cryptography Basics',
      'Malware, Phishing, and Social Engineering Attacks',
      'Security Auditing and Compliance',
      'Freelancing as a Cybersecurity Consultant',
      'Final Project: Perform a security audit of a small website or app.',
    ],
  },
  {
    courseTitle: '3D Modeling and Animation',
    courseDescription:
      'Learning Blender or Autodesk Maya software will give you opportunity to work in animations, architecture, or game design.',
    coursePic: `${modelingPix}`,
    courseFee: '650,000',
    courseDurations: '5 Months',
    courseOutlines: [
      'Introduction to 3D Modeling (Basics of Blender)',
      ' Creating Simple 3D Objects (Shapes, Modifiers)',
      'Advanced Modeling (Organic Shapes, Texturing)',
      'Introduction to Animation (Keyframes, Timeline)',
      'Lighting and Rendering in 3D Scenes',
      'Character Modeling and Rigging',
      'Particle Systems and Effects',
      'Game Asset Creation',
      'Exporting Models for Games/Animations',
      'Freelancing in 3D Modeling/Animation',
      'Final Project: Model and animate a 3D character or object.',
    ],
  },
  {
    courseTitle: 'Artificial Intelligence (AI) and Machine Learning Course ',
    courseDescription:
      'Explore AI tools, data science, and automation which help you in building innovative solutions or freelance data analysis projects.',
    coursePic: `${aiPix}`,
    courseFee: '1,750,000',
    courseDurations: '6 Months',
    courseOutlines: [
      'Introduction to AI and Machine Learning Concepts',
      ' Python for Machine Learning (Pandas, Numpy)',
      'Data Preprocessing and Cleaning',
      'Supervised Learning (Linear Regression, Classification)',
      'Unsupervised Learning (Clustering, Dimensionality Reduction)',
      'Introduction to Neural Networks (Basic Concepts, TensorFlow)',
      'Deep Learning (Convolutional Neural Networks)',
      'Natural Language Processing (NLP) Basics',
      'Model Evaluation and Tuning',
      'AI Ethics and Data Privacy',
      'Building AI Projects (Automation, Data Prediction)',
      'Deploying AI Models',
      'Final Project: Create an AI project (like a chatbot or image classifier).',
    ],
  },
  {
    courseTitle: 'Content Creation ',
    courseDescription:
      'For those who want to Start a YouTube channel, podcast, or blog on a topic of interest can become a source of income through ad revenue, sponsorships, and affiliate marketing.',
    coursePic: `${contentPix}`,
    courseFee: '320,000',
    courseDurations: '6 Months',
    courseOutlines: [
      'Introduction to Content Creation (Platforms, Niche Selection)',
      ' Creating Engaging Videos (Scripting, Filming, Editing)',
      'Building an Audience (SEO for YouTube, Social Media Strategy)',
      'Monetization Strategies (Ad Revenue, Sponsorships)',
      'Branding and Collaborations',
      'Analytics and Growth Strategies',
      'Final Project: Launch a YouTube channel or a blog with at least 3 content pieces.',
    ],
  },
];