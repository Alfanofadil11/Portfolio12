/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Alfano's Portfolio",
  description:
    "An individual who is resilient, inquisitive, and deeply passionate about acquiring knowledge. While prioritizing outcomes is essential, embracing the process is ingrained as a way of life.",
  og: {
    title: "Alfano Fadil Juyendra Portfolio",
    type: "website",
    url: "https://alfanofadil11.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Alfano Fadil Juyendra",
  logo_name: "Alfanofadil",
  nickname: "Alfano",
  subTitle:
    "An individual who is resilient, inquisitive, and deeply passionate about acquiring knowledge. While prioritizing outcomes is essential, embracing the process is ingrained as a way of life.",
  resumeLink:
    "https://drive.google.com/file/d/1UYVOO6wo8ZzQXV13o1MuGsPLeS7A8K5u/view?usp=sharing",
  portfolio_repository: "https://github.com/Alfanofadil11/alfanofadil11.github.io",
  githubProfile: "https://github.com/Alfanofadil11",
  profileLink:"https://drive.google.com/drive/folders/1YGLx6TcXrTaojb4sS5qV4T93U1ExfnOk?usp=sharing",
};
const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Alfanofadil11",
  // linkedin: "https://www.linkedin.com/in/alfano-fadil-juyendra-1b462b1b7/",
  // gmail: "alfanofadil@gmail.com",
  // instagram: "https://www.instagram.com/alfanofadil/"

  {
    name: "Github",
    link: "https://github.com/Alfanofadil11",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alfano-fadil-juyendra-1b462b1b7//",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:alfanofadil@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/padangssss",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/alfanofadil/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Sales Analyst/Business Analyst/Data Analyst",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Perform data analysis to identify trends, patterns, and insights that can inform business decisions.",
        "⚡ gathering and analyzing data from various sources to provide insights to support decision-making within an organization.",
        "⚡ Collects, cleans, and analyzes data to extract insights that inform business decisions.",
      ],
      softwareSkills: [
        {
          skillName: "Structured Query Language",
          fontAwesomeClassname: "tabler:sql",
          style: {
            backgroundColor: "transparent",
            color: "#ffce1f",
          },
        },
        {
          skillName: "Google BigQuery",
          fontAwesomeClassname: "simple-icons:googlebigquery",
          style: {
            backgroundColor: "transparent",
            color: "#c2d917",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Power:BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
          backgroundColor: "transparent",
          },
        },
        {
          skillName: "Visual Studio Code",
          fontAwesomeClassname: "logos:visual-studio-code",
          style: {
          backgroundColor: "transparent",
          },
        },
        {  
          skillName: "Looker Studio",
          fontAwesomeClassname: "logos:looker",
          style: {
          backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Digital Marketing/Analyst/Creator",
      fileName: "FullStackImg",
      skills: [
        "⚡ Making video project with Adobe Premiere Pro and After Effects",
        "⚡ Designing content with Photoshop, Canva, and Illustrator",
        "⚡ Analyze Data, Search Engine Optimization, and Search Engine Marketing for a Business",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "devicon:photoshop",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Adobe Premiere Pro",
          fontAwesomeClassname: "devicon-plain:premierepro",
          style: {
            backgroundColor: "#99f",
            color: "#00005b"
          },
        },
        {
          skillName: "Adobe After Effects",
          fontAwesomeClassname: "skill-icons:aftereffects",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "skill-icons:illustrator",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "logos:google-analytics",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Search Engine Optimization",
          fontAwesomeClassname: "tabler:seo",
          style: {
            color: "#7a4fde",
          },
        },
        {
          skillName: "Microsoft Word",
          fontAwesomeClassname: "vscode-icons:file-type-word",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#0079ad",
          },
        },
      ],
    },
    {
      title: "Creative Writer/General Writer",
      fileName: "DesignImg",
      skills: [
        "⚡ Writing Content for Digital Content",
        "⚡ Copywriting",
        "⚡ Article Writing for Philosophy, Politics, and Economics",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Word",
          fontAwesomeClassname: "vscode-icons:file-type-word",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Google Docs",
          fontAwesomeClassname: "simple-icons:googledocs",
          style: {
          backgroundColor: "transparent",
          color: "#0079ad",
        },
      },
      {
          skillName: "Google Scholar",
         fontAwesomeClassname: "simple-icons:googlescholar",
         style: {
          backgroundColor: "transparent",
          color: "#0079ad",
         },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#7a4fde",
      },
      profileLink: "https://www.coursera.org/account-profile",
    },
    {
      siteName: "Google Career Certificate",
      iconifyClassname: "flat-color-icons:google",
      style: {
        backgroundColor: "transparent",
      },
      profileLink: "https://coursera.org/share/0d52357ac4332a344ada644afb39d0c1",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Indonesia",
      subtitle: "Bachelor of Arts, in Philosophy",
      logo_path: "logo_ui.png",
      alt_name: "UI",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ As a philosophy student, I study analytical philosophy, philosophy of economics, philosophy of technology, and ethics to develop my critical thinking towards the practical world.",
        "⚡ In college, I hone my soft skills by participating in organizations and various events as a committee member.",
        "⚡ I also develop my hard skills in graphic design, data analysis, marketing, and writing.",
      ],
      website_link: "https://www.ui.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Foundations of Business Intelligence",
      subtitle: "- Amanda Brophy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/EEHNQRWEJ8LD",
      alt_name: "Google Career",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Models and Pipelines",
      subtitle: "- Amanda Brophy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WU8U545HWMSN",
      alt_name: "Google Career",
      color_code: "#0C9D5899",
    },
    {
      title: "Decisions, Decisions: Dashboards and Reports",
      subtitle: "- Amanda Brophy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T83F9N8S4GN",
      alt_name: "Google Career",
      color_code: "#0C9D5899",
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      subtitle: "- Amanda Brophy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/SNG2VLMK56P7",
      alt_name: "Google Career",
      color_code: "#0C9D5899",
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      subtitle: "- Amanda Brophy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/R48ASW7NGR2D",
      alt_name: "Google Career",
      color_code: "#0C9D5899",
    },
    {
      title: "Foundations of Digital Marketing and E-commerce",
      subtitle: "- Amanda Brophy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5DTZF5E2BXGY",
      alt_name: "Google Career",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Business Intelligence",
      subtitle: "- Amanda Brophy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/QTCQSAXNAM54",
      alt_name: "Google Career",
      color_code: "#0C9D5899",
    },
    {
      title: "Business Intelligence Analyst",
      subtitle: "- Bank Muamalat",
      logo_path: "logo_rakamin.png",
      certificate_link: 
        "https://drive.google.com/file/d/1gi8CROsF71-xaIMczh60Gy8pQBCgYgjD/view?usp=sharing",
      alt_name: "Rakamin Academy x Bank Muamalat",
      color_code: "#d6d6d6",
     },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, and Volunteership",
  description:
    "I underwent an internship at Bank Muamalat as a Business Intelligence Analyst for a month. Currently, I am undergoing an internship at Vision+ as a Planning & Scheduling Research intern. Additionally, I have experience in Video Editing as a freelancer at Satu Persen Indonesia Life School.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Freelance Video Editor",
          company: "Satu Persen Indonesia Life School",
          company_url: "https://satupersen.net/",
          logo_path: "Logo-satupersen.png",
          duration: "August 2023 - January 2024",
          location: "Remote, Indonesia",
          description:
            "Making storyboard for Instagram reels video. Doing all video editing process including collecting footage, designing, and editing. Complete 8 reels Instagram video per week.",
          color: "#FFCB0F",
        },
        {
          title: "Content Research Freelance",
          company: "Edulead.id",
          company_url: "https://edulead.id/",
          logo_path: "logo_edulead.png",
          duration: "November 2022 - March 2023",
          location: "Remote, Indonesia",
          description:
            "Research on content focusing on social issues, education, government, and public policy.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Planning & Scheduling Research Intern",
          company: "Vision+",
          company_url: "https://www.visionplus.id/webclient/#/",
          logo_path: "Vision+Logo.png",
          duration: "October 2023 - Now",
          location: "Central Jakarta, Indonesia",
          description:
            "Gathering data through data collection in Looker Studio for the purpose of facilitating weekly planning. Creating monthly performance data visualization using charts in Excel Spreadsheet and PivotTable. Daily tasks involve scheduling Free to Air (FTA) and Video on Demand (VOD) content with trend analysis using Looker Studio. Contribute to Mirada cloud migration project as a proofreader for query/API’s metadata content that will be entered into the cloud.",
          color: "#d6d6d60",
        },
        {
          title: "Business Intelligence Analyst Intern",
          company: "Bank Muamalat x Rakamin Academy",
          company_url: "https://www.rakamin.com/virtual-internship-experience/vix-muamalat-bi-analyst",
          logo_path: "logo_bmi.png",
          duration: "September 2023 - October 2023",
          location: "Remote, Indonesia",
          description: "Learn about skills and tools commonly used at Bank Muamalat Business Intelligence Analyst, such as Statistics & Business Acumen, Data Visualization, Excel Data Processing, Excel Data Processing, SQL Operation, BI Tools: Dashboard. Project 1: Making dashboard from Bank Muamalat raw data and processing with Google Big Query and Looker Studio. Processing data included Data Analysis, Data Filtering, Data Viz, and Data Insight.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Coordinator of Public relations, Publication, Design, and Documentation",
          company: "Philosofair UI 2021",
          company_url: "https://www.instagram.com/philosofairui/",
          logo_path: "logo-philo.jpg",
          duration: "Mar 2021 - November 2021",
          location: "Depok, Indonesia",
          description:
            "Philosofair UI is an annual event from philosophy students. Coordinate all the division to complete target such as increase the Instagram followers, a trailer video, and interesting visualization design.",
          color: "#4285F4",
        },
        {
          title: "Graphic Design Staff",
          company: "UI Battleground 2020",
          company_url: "https://www.instagram.com/uibattlegrounds/",
          logo_path: "BEM_UI_2020.png",
          duration: "June 2020 - December 2020",
          location: "Remote, Indonesia",
          description:
            "UI Battleground is an online game competition event such as Valorant, Mobile Legend, and PUBG Mobile led by Sport Departement of BEM UI 2020. Contribute at making design concept. Carrying out designs with good teamwork throughout the event at that time.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. The projects I work on revolve around digital editing and design, article writing, and data. I can't showcase my Business Intelligence Analyst project because the data in Looker Studio is no longer connected to my Google BigQuery as the subscription has expired.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publication",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Video Profile Philosophy University of Indonesia",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "fotogue.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "East Jakarta, Indonesia",
    locality: "Ciracas",
    country: "INDO",
    region: "East Jakarta",
    postalCode: "13750",
    streetAddress: "Makmur Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/d/viewer?mid=1fzvE_mZ3kxFYPOWO85h9EjqGURs&hl=en&ll=-6.309952617910864%2C106.86681101488203&z=17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
