import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNpm,
  SiMysql,
  SiAmazonwebservices,
  SiFirebase,
  SiPython,
  SiCplusplus,
  SiGit,
  SiPostman
} from "react-icons/si";

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
  username: "Kritika Singh",
  title: "Hi all, I'm Kritika",
  subTitle:
    "A passionate Full Stack Software Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1_awLuQYL6U3gNAzNYj9luultRvgoG2f1/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kritika-git",
  linkedin: "https://www.linkedin.com/in/kritika-singh-960a00215/",
  gmail: "kritika.singh1824gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡Crafting sleek and dynamic UIs with React and modern JavaScript"),
    emoji(
      "⚡Building full-stack apps, REST APIs, and working with MongoDB & Express"
    ),
    emoji(
      "⚡Passionate about DSA, problem-solving, and diving into open-source contributions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "HTML5", icon: <SiHtml5 />},
    {skillName: "CSS3", icon: <SiCss3 />},
    {skillName: "JavaScript", icon: <SiJavascript />},
    {skillName: "ReactJS", icon: <SiReact />},
    {skillName: "NodeJS", icon: <SiNodedotjs />},
    {skillName: "ExpressJS", icon: <SiExpress />},
    {skillName: "MongoDB", icon: <SiMongodb />},
    {skillName: "npm", icon: <SiNpm />},
    {skillName: "SQL", icon: <SiMysql />},
    {skillName: "AWS", icon: <SiAmazonwebservices />},
    {skillName: "Firebase", icon: <SiFirebase />},
    {skillName: "Python", icon: <SiPython />},
    {skillName: "C++", icon: <SiCplusplus />},

    {skillName: "Git", icon: <SiGit />},
    {skillName: "Postman", icon: <SiPostman />}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Heritage Institute of Technology, Kolkata",
      logo: require("./assets/images/heritageLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2022 - June 2026",
      desc: "GPA : 8.63 (Till 5th Sem) ",
      descBullets: [
        "Relevant Courses: Object Oriented Programming, Operating Systems, Database Management Systems, Computer Networks"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
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
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PERSONAL PROJECTS I AM PROUD OF",
  projects: [
    {
      image: require("./assets/images/journeyBot.png"),
      projectName: "JourneyBot - AI Trip Planner",
      projectDesc:
        "AI-powered trip planner designed to help users effortlessly plan their travel itineraries.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ai-travel-plan-alpha.vercel.app/"
        }
      ]
    }
  ],
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
      title: "ACM Brainstorm '24- 2nd Runner Up",
      subtitle: "",
      image: require("./assets/images/acmLogo.png"),
      imageAlt: "ACM- Student Chapter",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1vjkP4-MldfnRE4--ZCO098ZPVWTggGgR/view?usp=sharing"
        }
      ]
    },
    {
      title: "Editor and Co-founder of HI-Tech Magazine",
      subtitle: "",
      image: require("./assets/images/HiTECH.png"),
      imageAlt: "Hi-Tech Magazine Logo",
      footerLink: [
        {
          name: "Latest Edition Link",
          url: "https://drive.google.com/file/d/1MzAPWLegKVPk-bG3H42BHZW9ImTb37Ey/view?usp=sharing"
        }
      ]
    },
    {
      title: "HULT Prize OnCampus HITK",
      subtitle:
        "Led the design team of HULT@Hitk and increased event engagement through compelling visuals.",
      image: require("./assets/images/HultLogo.png"),
      imageAlt: "Hult prize Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Ec-ZCK-XumZJc1rn6O-SzpXuJZP_BdJg/view?usp=sharing"
        }
      ]
    },

    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      subtitle: "Completed Certification from Udemy for Web Development",
      image: require("./assets/images/udemyLogo.jpg"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1K6cvkSEw2kh-diHAynpYAp56KvtGi1nh/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "mailtokritika18@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
