// The 3 projects featured as "large" bento tiles on both the full /projects
// page and the landing page's Top-3 preview — single source of truth so the
// two don't drift out of sync with each other.
export const FEATURED_PROJECT_IDS = ["off-the-frame", "3d-tshirt-customizer", "soulmate"];

export const projectData = [
  {
    id: "off-the-frame",
    projectName: "#OffTheFrame",
    projectDescription:
      "OffTheFrame is a curated art-print marketplace where you can discover original pieces and limited-edition prints, explore collections, and purchase or download artwork designed to fit modern spaces. It’s built to feel fast, clean, and trustworthy—making it easy to browse, preview, and collect art you actually want to live with.",
    // TODO(kevin): stack isn't stated in the description above -- confirm/adjust these tags.
    techStack: ["React", "Node.js"],
    slides: [
      "https://protfolio-kevin-assets.s3.us-east-2.amazonaws.com/projects/offtheframe/offtheframehome.png",
      "https://protfolio-kevin-assets.s3.us-east-2.amazonaws.com/projects/offtheframe/offtheframeproduct.png",
    ],
    color: "#FDF5E6",
    githubLink: "https://github.com/kevin46dsa/OffTheFrame",
    websitePage: "https://offtheframe.nosenterprise.org/",
  },
  {
    id: "soulmate",
    projectName: "SoulMate",
    projectDescription:
      "This a Project primaryly focus on solar project management system that we prepared for CS-555-Agile Development Project using React, Firebase  Team: Easy Scurm Team Members: Rongda Kang,Kevin Dsa, Yuzhi Wang(Scrum Master),Luoyi Fu, Mingze Sun.",
    techStack: ["React", "Firebase"],
    slides: [
      "https://protfolio-kevin-assets.s3.us-east-2.amazonaws.com/projects/soulmate/soulmatehome.png",
      "https://protfolio-kevin-assets.s3.us-east-2.amazonaws.com/projects/soulmate/soulmatelogin.png",
    ],
    color: "#FDF5E6",
    githubLink: "https://github.com/kevin46dsa/CS-555-project",
    websitePage: "https://soulmatecs555.netlify.app/",
  },
  {
    id: "rentpipe",
    projectName: "RentPipe",
    projectDescription:
      "Modern UI/UX website using React.js & ReactBoostrap Final Project for Course CS 545 Human Computer Interaction at Stevens Institute of technology",
    techStack: ["React", "React Bootstrap"],
    thumbnail:
      "https://i.ibb.co/wLv47Wm/Rent-Pipe-logos-white-adobe-express.png",
    slides: [
      "https://protfolio-kevin-assets.s3.us-east-2.amazonaws.com/Screenshot%202023-07-09%20at%206.25.54%20PM.png",
      "https://protfolio-kevin-assets.s3.us-east-2.amazonaws.com/Screenshot%202023-07-09%20at%206.26.35%20PM.png",
    ],
    color: "#F0F8FF",
    githubLink: "https://github.com/kevin46dsa/RentPipe",
    websitePage: "https://rentpipe.netlify.app/",
  },
  {
    id: "3d-tshirt-customizer",
    projectName: "3D T-Shirt Website using React + Three.JS",
    projectDescription:
      "Reactive 3D T-Shirt Customizer Web Application leveraging the power of Three.JS Framer Motion and 3D TShirt Model. Inspired by youtube channel Javascript Mastery",
    techStack: ["React", "Three.js", "Framer Motion"],
    slides: [
      "https://protfolio-kevin-assets.s3.us-east-2.amazonaws.com/projects/3dshirt/3dhome.png",
      "https://protfolio-kevin-assets.s3.us-east-2.amazonaws.com/projects/3dshirt/3dproduct.png",
    ],
    color: "#FDF5E6",
    githubLink: "https://github.com/kevin46dsa/3D-Website-shop",
    websitePage: "https://3dtshirtcustomizerjsm.netlify.app/",
  },
  {
    id: "budget-expense-tracker",
    projectName: "Budget Expense Tracker",
    projectDescription:
      "MERN Fullstack website, Final Project for Course CS 546 Web Programming at Stevens Institute of technology",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    thumbnail:
      "https://i.ibb.co/wLv47Wm/Rent-Pipe-logos-white-adobe-express.png",
    slides: [
      "https://user-images.githubusercontent.com/67777018/189949158-ed97b4a3-d114-4772-ba36-4244bd721d6e.PNG",
      "https://user-images.githubusercontent.com/67777018/189949160-3765802d-0a40-4d65-ae13-fe90288081cd.PNG",
    ],
    color: "#FDF5E6",
    githubLink: "https://github.com/kevin46dsa/BET-Client",
    websitePage: "https://betclient.herokuapp.com/",
  },
  {
    id: "nba-career-longevity-prediction",
    projectName: "NBA Career Longevity Prediction",
    projectDescription:
      "This repository contains the code for the NBA Career Longevity Prediction project developed for the CS 513 course. The project aims to predict the career longevity of NBA players based on various features and factors.",
    // TODO(kevin): stack isn't stated in the description above -- confirm/adjust these tags.
    techStack: ["Python", "Machine Learning"],
    slides: [
      "https://user-images.githubusercontent.com/67777018/245667029-8527140e-1bfa-498e-9972-933a5b752225.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2NzA0ODAsIm5iZiI6MTcwNDY3MDE4MCwicGF0aCI6Ii82Nzc3NzAxOC8yNDU2NjcwMjktODUyNzE0MGUtMWJmYS00OThlLTk5NzItOTMzYTViNzUyMjI1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDIzMjk0MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJlZmQ2YzRjNGEzNTNiMjg0NmE1NjdiNjliN2I0ZGM2ODg2YWMyYzcxYTI1OGRiOTFmNjdlMGNlNzI1MzE2MWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.3rbuaSOENhiKNmjPy-Rnr85t8em_hVgQgt6Jvy7noXc",
      "https://user-images.githubusercontent.com/67777018/245667040-139c3a3c-256a-402f-943d-146e57635157.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY0NzQyODUsIm5iZiI6MTcwNjQ3Mzk4NSwicGF0aCI6Ii82Nzc3NzAxOC8yNDU2NjcwNDAtMTM5YzNhM2MtMjU2YS00MDJmLTk0M2QtMTQ2ZTU3NjM1MTU3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI4VDIwMzMwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY3MjAwZDIzNjhhZThjZmQ0YjVmZDUwNTFhMjBiNTY3NDg1ZTZlNjYyZDIyYjg3MmEzNTYxYTBlZmEzNDEwYmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.6pKLiFNOX5TH52py7MWvbhsbGNw8RQEYV4--_Ky1MNg",
    ],
    color: "#FDF5E6",
    githubLink: "https://github.com/kevin46dsa/NBA-Career-Longevity-Pridiction",
    websitePage: "",
  },
];
