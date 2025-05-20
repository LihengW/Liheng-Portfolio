/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Liheng Wei",
  title: "Hi all, I'm Liheng",
  subTitle: emoji(
    "A game development programmer with a passion for shoegazing music and romantic movies"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qZHN3e1UUlKCqS_QgrvkOx5gAly2cBwU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/LihengW",
  linkedin: "https://www.linkedin.com/in/liheng-wei-846aa4329",
  gmail: "yukio.wlh@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Let's see what I've done!",
  projects: [
    {
      image: require("./assets/images/MusicVisualization.png"),
      projectName: "XR Music Visualization Experience",
      projectDesc: "A collaboration between USC and Sony Pictures Entertainment. The project aims to develop an interactive, editable, and immersive music visualization system. Within this XR experience, users can intuitively grasp professional music concepts and explore music composition in a personalized and engaging way.",
      footerLink: [
        {
          name: "Presentation & Demo video",
          url: "https://docs.google.com/presentation/d/11V0ECA-sgVmk-tzGOmHO5QTwAZdZMU6jcJezDuTSM-0/edit?usp=sharing"
        },
        {
          name: "GitHub Repository",
          url: "https://github.com/LihengW/MusicVisualization"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/deferredrender.png"),
      projectName: "Tiled Deferred Rendering Support in Prime Engine",
      projectDesc: "Implemented a full deferred rendering pipeline along with tiled deferred rendering optimizations based on Prime Engine, a custom C++ engine. The system uses OpenGL as the graphics API and CGGL as the OpenGL wrapper to build the deferred rendering workflow. Since CGGL does not support compute shaders, I developed an alternative solution using pixel-based tile information masks. Additionally, I implemented several debugging tools and performance optimizations.",
      footerLink: [
        {
          name: "MileStone Video (Code Review)",
          url: "https://youtu.be/RuhRq3YNMEU"
        },
        {
          name: "GitHub Repository",
          url: "https://github.com/LihengW/MusicVisualization"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/poy.png"),
      projectName: "Prism of You",
      projectDesc: "USC MFA Project: A sandbox creature-raising game. I served as a Gameplay Engineer, primarily responsible for designing and implementing behavior patterns for various types of creatures (characters). I developed behavior tree nodes for different species to enable specific actions such as jumping, spiral spinning, and zigzag movement. Additionally, I implemented partial character morphing features, including writing a dissolve shader and supporting physics-based interactions.",
      footerLink: [
        {
          name: "Steam Webpage",
          url: "https://store.steampowered.com/app/3613920/Prism_of_You/"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/penguin.png"),
      projectName: "Penguin Adventure",
      projectDesc: "Penguin Adventure is a 3D platformer that combines a ragdoll system with a traditional animation system. The game centers around controlling a drunken penguin as it searches for its way home, with players independently managing each foot to maintain rhythm, balance, and direction while avoiding a variety of comical hazards. I served as the Lead Engineer on the project, primarily responsible for developing the character gameplay system, including ragdoll and animation blending, integrating the animation state machine with the physics system, and enabling environmental physics interactions.",
      footerLink: [
        {
          name: "Trailer",
          url: "https://youtu.be/Vtw8wW0ARY4"
        },
        {
          name: "Release Version Download",
          url: "https://drive.google.com/file/d/1p-ctCZKKxAeyyRrZREeMr1yXmaxDDXAl/view?usp=sharing"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Splatoon.png"),
      projectName: "Burst of Color",
      projectDesc: "An independent project focused on replicating the core mechanics of Splatoon while enhancing both graphical expression and gameplay systems. Developed key game logic primarily in C++ to optimize performance and ensure scalability.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/LihengW/Splatoon_UE"
        }
      ]
    },
    {
      image: require("./assets/images/no_where_to_escape.png"),
      projectName: "Nowhere to Escape",
      projectDesc: "A strategic game inspired by the classic board game Quoridor, integrating the mechanics of placing physical barriers with elements of the traditional Chinese game Go. Developed and implemented in Unity, combining strategic depth with engaging gameplay dynamics.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/LihengW/Nowhere_to_Escape"
        }
      ]
    },
    {
      image: require("./assets/images/CornellBox.png"),
      projectName: "PathTracing Renderer",
      projectDesc: "A lightweight program implemented to create visuals using PathTracing technology. This project features a variety of customizable materials, allowing users to modify them according to their design preferences.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/LihengW/RayTracing"
        }
      ]
    },
    {
      image: require("./assets/images/engine.png"),
      projectName: "Swirl",
      projectDesc: "A self-developed game engine project with the goal of creating a lightweight 2D game engine. The project currently features an OpenGL-based 2D renderer, an event system, and a virtual system layer, providing a solid foundation for future expansions.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/LihengW/Swirl"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Well-rounded game engineer, skilled in building game flows in mainstream engines. very interested in game engines, passionate about optimizing game performance and making new tools.",
  skills: [
    emoji(
      "♠️ Programming: C++, C#, Python, GLSL..."
    ),
    emoji("♣️ Graphics APIs: OpenGL, DirectX"),
    emoji(
      "♥️ GameEngine: Unity, Unreal"
    ),
    emoji(
      "♦️ Data Analysis: Pytorch, Tensorflow, R..."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Unreal Engine",
      fontAwesomeClassname: "fas fa-gamepad"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-hashtag"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "HLSL",
      fontAwesomeClassname: "fas fa-image"
    },
    {
      skillName: "Pytorch/tensorflow",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/images/USC_Icon.png"),
      subHeader: "Master of Science in Computer Science Game Development",
      duration: "September 2024 - Present",
      desc: "Learning specialized knowledge in both game development and game design and participating in several game/transmedia experience programs",
      descBullets: [
        "Mainly use Unreal Engine and learned a lot about game engine development.",
        "Work as game engineer in several projects."
      ]
    },
    {
      schoolName: "Huazhong University of Science and Technology",
      logo: require("./assets/images/Hust_Icon.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2021 - June 2024",
      desc: "Mainly focused on researches related to deep learning applications in the medical field, Studied in Embedded and Pervasive Computing Lab in HUST ",
      descBullets: ["constructed a knowledge graph-based assisted diagnosis and treatment system for depression and a dialog bot.",
        "propose a multiclassification cancer diagnostic model based on TEP-RNA gene fragments and graph neural networks."
      ]
    },
    {
      schoolName: "Huazhong University of Science and Technology",
      logo: require("./assets/images/Hust_Icon.png"),
      subHeader: "Bachelor of Mathematics",
      duration: "September 2017 - June 2021",
      desc: "Ranked top 10% in the program. Took courses about mathematical analysis, linear algebra, differential equation...",
      descBullets: ["Specialized in computational mathematics and numerical method, took courses about numerical solution of differential equations and numerical approximation..."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "GamePlay Engineer Intern",
      company: "Tencent Games",
      companylogo: require("./assets/images/Tencent.png"),
      date: "Jun 2025 - Present",
      desc: "",
      descBullets: [
        "GamePlay Engineer",
        "Mobile Fighting Game",
        "Melee System",
      ]
    },

    {
      role: "Game Analyst Intern",
      company: "Soonyo Technology Co., Ltd.",
      companylogo: require("./assets/images/xunyou.jpg"),
      date: "Jul 2021 - Aug 2021",
      desc: "Managed and analyzed player activity data in a private SQL database to track gameplay behaviors, purchasing patterns, and retention, providing insights to support in-game event planning and product updates for Fishing Champion. Developed an RNN-based monitoring program to detect abnormal user activity and implemented database breakpoints to prevent cheating and abuse.",
      descBullets: [
        "Game System Tuning",
        "Data Analysis"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "NetEase Games",
      companylogo: require("./assets/images/netease.jpg"),
      date: "Jul 2020 - Aug 2020",
      desc: "Manually classified game items and analyzed player engagement to identify trends and correlations between item purchases and in-game events. Developed a statistical model using XGBoost's Gradient Boosting techniques, achieving 45% prediction accuracy in forecasting top-purchased items from a pool of 8,000.",
      descBullets: [
        "Machine Learning",
        "Data Analysis"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in the program I'm doing? Or do you have any questions? Just contact me!",
  number: "+1-2139945978",
  email_address: "lihengwe@usc.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "Yukiowei", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
