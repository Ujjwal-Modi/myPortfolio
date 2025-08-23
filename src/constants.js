// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import NLPLogo from './assets/tech_logo/NLP.png';
import tensorflowLogo from './assets/tech_logo/tensorflow.png';
import MatplotlibLogo from './assets/tech_logo/Matplotlib.png';
import numpyLogo from './assets/tech_logo/numpy.png';
import scikitlearnLogo from './assets/tech_logo/scikit-learn.png';



// Experience Section Logo's
import hyperbotsLogo from './assets/company_logo/Hyperbots.png';


// Education Section Logo's
import HPCAlogo from './assets/education_logo/HPCA.png';
import CPAlogo from './assets/education_logo/CPA.png';
import KIITlogo from './assets/education_logo/KIIT.png';

// Project Section Logo's
import barGraphLogo from './assets/work_logo/bar_graph.png';
import currencyConvertorLogo from './assets/work_logo/currencyConvertor.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'AI/ML & Data Science Tools',
    skills: [
      { name: 'Scikit-Learn', logo: scikitlearnLogo },
      { name: 'Numpy', logo: numpyLogo },
      { name: 'Matplotlib', logo: MatplotlibLogo },
      { name: 'TensorFlow', logo: tensorflowLogo },
      { name: 'NLP', logo: NLPLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: hyperbotsLogo,
      role: "Business Development",
      company: "Hyperbots Inc.",
      date: "May 2025 - July 2025",
      desc: "Independently managed 5+ corporate events with 20+ attendees across US time zones, ensuring successful execution under budget that led to client acquisitions and demos.",
      skills: [
  "Vendor Management",
  "Event Planning & Execution",
  "Budget Creation & Reporting",
  "Data Generation (LinkedIn Sales Navigator, ZoomInfo)",
  "Cross-Functional Collaboration",
  "Process Optimization"
],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: KIITlogo,
      school: "Kalinga Institute of Industrial Technology, Bhubaneswar",
      date: "Sept 2022 - July 2026",
      grade: "8.35 CGPA",
      desc: "Pursuing B.Tech in Computer Science, learning Machine Learning, Web Development, and multiple programming languages. Actively participated in two college societies.",
      degree: "Bachelor of Technology",
    },
    {
      id: 1,
      img: CPAlogo,
      school: "Central Public Academy, Gorakhpur",
      date: "Apr 2019 - March 2021",
      grade: "79.4%",
      desc: "Completed Class 12 with CBSE curriculum, focusing on Physics, Chemistry, and Mathematics (PCM).",
      degree: "Senior School Certificate Examination",
    },
    {
      id: 2,
      img: HPCAlogo,
      school: "H. P. Children's Academy, Gorakhpur",
      date: "Apr 2018 - March 2019",
      grade: "85%",
      desc: "Completed Class 10 with ICSE curriculum, learned QBasic and Java, and scored 100 in Computer board exam.",
      degree: "Indian School Certificate",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ML Model Comparison & Tuning",
      description:
        "Authored a research paper analyzing multiple machine learning models with a focus on performance benchmarking and hyperparameter tuning. The study involved dataset preprocessing, model implementation, and evaluation to identify the most accurate predictive approach.",
      image: barGraphLogo,
      tags: ["Python", "Scikit-Learn", "Numpy", "Matplotlib", "TensorFlow"],
      github: "https://github.com/Ujjwal-Modi/Research-Paper-Loan-Approval",
      webapp: "https://drive.google.com/file/d/1npsfTZXbBU-RjUQgV93bdxesRleb6_Vr/view?usp=sharing",
    },
    {
      id: 1,
      title: "Currency Converter",
      description:
        "A responsive web-based currency converter deployed on Vercel, enabling real-time conversion between global currencies using live exchange-rate API data. The codebase, hosted on GitHub, demonstrates API integration, clean UI design, and client-side data handling.",
      image: currencyConvertorLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ujjwal-Modi/Currency-Converter",
      webapp: "https://currency-converter-chi-two.vercel.app/",
    }
  ];  