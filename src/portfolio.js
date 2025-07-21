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
  username: "Kabir Pandey",
  title: "Hi all, I'm Kabir",
  subTitle: emoji(
    "A tech-savvy PLM Developer 🚀 with expertise in Windchill customization using Java, and a passion for automating engineering workflows through code."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LChrqG-GsQUHSVAE_UdbLo3d6q5KuOKN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kabir2811",
  linkedin: "https://www.linkedin.com/in/kabir-pandey-10693b1b2/",
  gmail: "pandey.kabir77@@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE PLM & SOFTWARE DEVELOPER WHO BUILDS SCALABLE SOLUTIONS WITH WINDCHILL, JAVA, PYTHON & MODERN TECH STACKS 🚀",
  skills: [
    emoji(
      "⚡ Customize and configure PLM systems like Windchill (PDM Link, MPM Link, ProjectLink, PartsLink) using Java"
    ),
    emoji(
      "⚡ Build intelligent backend solutions with Java and Python, including real-time image processing and NLP apps"
    ),
    emoji(
      "⚡ Collaborate with enterprise clients to design engineering workflows, data migrations, and lifecycle configurations"
    ),
    emoji(
      "⚡ Work with Creo, Autodesk, and smart tech systems to bridge the gap between engineering design and software"
    ),
    emoji(
      "⚡ Cloud exposure with AWS (EC2, S3, Lambda), version control, and Agile-based delivery for enterprise solutions"
    )
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true
};

// Education Section


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "MIT World Peace University (MIT-WPU)",
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "2020 - 2024",
      desc: "Graduated with a CGPA of 9.26/10.00 with a strong focus on software development.",
      descBullets: [
        
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Certifications, Training Programs, Capstone Projects, and Highlights from My Learning Journey!",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner (In Progress)",
      subtitle:
        "Covering cloud computing fundamentals, AWS services (EC2, S3, Lambda), security best practices, and pricing models. Expected completion: August 2025.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification Info",
          url: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
        }
      ]
    },
    {
      title: "Windchill PLM System – Customization & Configuration",
      subtitle:
        "Completed professional training focused on customizing and configuring Windchill modules like PDM Link, MPM Link, ProjectLink, and PartsLink.",
      image: require("./assets/images/windchillLogo.png"), // Add this image to your assets folder
      imageAlt: "Windchill Logo",
      footerLink: []
    },
    {
      title: "Java Developer Training – Plural Technology Pvt. Ltd.",
      subtitle:
        "Hands-on Java training covering Core Java, OOP, backend concepts, and Java-based project implementation for enterprise use cases.",
      image: require("./assets/images/javaLogo.png"), // Add or use default java image
      imageAlt: "Java Logo",
      footerLink: []
    },
    {
      title: "Indian Sign Language Detection System – Final Year Project",
      subtitle:
        "Built a real-time ISL recognition system using deep learning and image processing, enhancing communication for hearing/speech-impaired users.",
      image: require("./assets/images/islProject.png"), // Custom image, optional
      imageAlt: "ISL Project",
      footerLink: [
        {
          name: "Project Overview",
          url: "https://github.com/" // Add your GitHub link if hosted
        }
      ]
    },
    {
      title: "Seminar on Smart Farming Security using IoT",
      subtitle:
        "Explored cybersecurity challenges in IoT-based agriculture and how blockchain can secure sensitive farming data.",
      image: require("./assets/images/iotLogo.png"), // Optional IoT logo
      imageAlt: "IoT Logo",
      footerLink: []
    },
    {
      title: "Google Digital Marketing Certification",
      subtitle:
        "Completed Google training in SEO, social media marketing, content strategy, email campaigns, and analytics.",
      image: require("./assets/images/googleLogo.png"), // Google logo
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/17VDRTLnTwdsBFguFV76Qb0thssMEWUrs/view?usp=drivesdk" // Public info page
        }
      ]
    }
  ],
  display: true
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7722033650",
  email_address: "pandey.kabir77@gmail.com"
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
