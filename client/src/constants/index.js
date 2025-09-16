import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAngular,
  SiDotnet,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiPostman,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

import { DiReact, DiNodejs, DiJavascript } from "react-icons/di";
import { resolveAssetPath } from "../utils/resolveAssetPath";

const logoIconsList = [
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiAngular, label: "Angular" },
  { icon: SiDotnet, label: ".NET" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiRedux, label: "Redux" },
  { icon: SiGraphql, label: "GraphQL" },
  { icon: SiPostman, label: "Postman" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithubactions, label: "GitHub Actions" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss3, label: "CSS3" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: DiReact, label: "React (Di)" },
  { icon: DiNodejs, label: "Node.js (Di)" },
  { icon: DiJavascript, label: "JavaScript (Di)" },
];

const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Resume", link: "#resume" },
  { name: "About Me", link: "#about" },
];

const words = [
  { text: "Ideas", imgPath: resolveAssetPath("/images/ideas.svg") },
  { text: "Concepts", imgPath: resolveAssetPath("/images/concepts.svg") },
  { text: "Designs", imgPath: resolveAssetPath("/images/designs.svg") },
  { text: "Code", imgPath: resolveAssetPath("/images/code.svg") },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const abilities = [
  {
    imgPath: resolveAssetPath("/images/seo.png"),
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: resolveAssetPath("/images/chat.png"),
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: resolveAssetPath("/images/time.png"),
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const expCards = [
  {
    review:
      "Mani has consistently delivered high-quality full-stack solutions using MERN, Python, and Java. He has designed secure RESTful/GraphQL APIs, integrated SQL & NoSQL databases, and built responsive front-end applications. His application of DevOps practices with CI/CD pipelines, Docker, and GitHub Actions has ensured efficient and reliable deployments..",
    imgPath: resolveAssetPath("/images/logos/Deloitte.png"),
    logoPath: resolveAssetPath("/images/logos/Deloitte.png"),
    title: "Full Stack Developer",
    date: "September 2023 – Present",
    responsibilities: [
      "Full-stack developer skilled in MERN, Python, and Java, delivering scalable and secure web applications.",
      "Designed and implemented RESTful/GraphQL APIs, integrated SQL & NoSQL databases, and built responsive UIs.",
      "Applied DevOps practices with CI/CD pipelines, Docker, and GitHub Actions for efficient deployment.",
    ],
  },
  {
    review:
      "Mani’s experience running ecommerce platforms such as digitalmarketmani.store and manideals.store has showcased his ability to build, scale, and manage online businesses. He successfully applied data-driven strategies in product sourcing, customer engagement, and digital marketing. His focus on automation, secure payment systems, and seamless user experience has delivered consistent results and customer satisfaction..",
    imgPath: resolveAssetPath("/images/logos/CRIS.png"),
    logoPath: resolveAssetPath("/images/logos/CRIS2.png"),
    title: "Ecommerce Entrepreneur",
    date: "May 2022 – Present ",
    responsibilities: [
      "Built and managed online stores including digitalmarketmani.store and manideals.store, specializing in digital products and dropshipping..",
      "Applied data-driven strategies for product sourcing, customer engagement, and marketing campaigns.",
      "Implemented automation tools, secure payment gateways, and optimized UX to drive customer satisfaction and retention.",
    ],
  },
  {
    review:
      "Mani showcased strong Python, Java, and MERN development skills during his full-stack internship. He successfully built RESTful APIs with Django and Spring Boot, designed interactive React front-ends, and delivered scalable full-stack projects. His ability to create secure authentication systems, clean admin dashboards, and deploy applications on cloud platforms demonstrated both technical skill and practical problem-solving..",
    imgPath: resolveAssetPath("/images/logos/CRIS.png"),
    logoPath: resolveAssetPath("/images/logos/CRIS2.png"),
    title: "Python, Java & MERN Full-Stack Developer Intern",
    date: "Sep 2023 – Present",
    responsibilities: [
      "Completed intensive full-stack training at Coding Dojo, gaining hands-on experience with Python (Django/Flask), Java (Spring Boot), and the MERN stack (MongoDB, Express.js, React, Node.js)..",
      "Developed responsive front-end interfaces with React and Bootstrap, ensuring usability and performance.s.",
      "Applied DevOps practices with GitHub Actions, containerization using Docker, and deployments on platforms like Heroku and AWS.",
    ],
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: resolveAssetPath("/models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: resolveAssetPath("/models/python-transformed.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: resolveAssetPath("/models/node-transformed.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: resolveAssetPath("/models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git + CI Practices",
    modelPath: resolveAssetPath("/models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const techStackImgs = [
  { name: "React Developer", imgPath: resolveAssetPath("/images/logos/react.png") },
  { name: "Python Developer", imgPath: resolveAssetPath("/images/logos/python.svg") },
  { name: "Backend Developer", imgPath: resolveAssetPath("/images/logos/node.png") },
  { name: "Interactive Developer", imgPath: resolveAssetPath("/images/logos/three.png") },
  { name: "Git + CI Practices", imgPath: resolveAssetPath("/images/logos/git.svg") },
];

const testimonials = [
  {
    name: "Laura Smith",
    mentions: "@laura_smith",
    review:
      "Collaborating with Mani was one of the best decisions for our business. He took time to understand our goals and delivered a website that is sleek, responsive, and easy to manage. Truly exceeded expectations.",
    imgPath: "",
  },
  {
    name: "Daniel Carter",
    mentions: "@daniel_carter",
    review:
      "Working with Mani was a smooth experience from start to finish. He transformed our vision into reality with incredible precision. The new site is not only visually appealing but also performs flawlessly.",
    imgPath: "",
  },
  {
    name: "Sophia Martinez",
    mentions: "@sophia_m",
    review:
      "Mani brought so much creativity and professionalism to our project. He solved challenges quickly and provided valuable suggestions that made our platform even better. Highly recommended!",
    imgPath: "",
  },
  {
    name: "James Robinson",
    mentions: "@james_robinson",
    review:
      "Mani was outstanding to work with. He rebuilt our company website with a modern design and smooth functionality. The results have already increased customer engagement. Excellent job!",
    imgPath: "",
  },
  {
    name: "Emma Johnson",
    mentions: "@emma_j",
    review:
      "Mani’s expertise in full-stack development is top-notch. He created a powerful e-commerce site for us that boosted our sales within weeks. Reliable, skilled, and professional.",
    imgPath: "",
  },
  {
    name: "Michael Brown",
    mentions: "@michael_b",
    review:
      "From the very beginning, Mani impressed us with his attention to detail and technical knowledge. He delivered everything on time and provided continuous support. A pleasure to work with.",
    imgPath: "",
  },
];

// ✅ EXPORT EVERYTHING
export {
  logoIconsList,
  navLinks,
  words,
  counterItems,
  abilities,
  expCards,
  techStackIcons,
  techStackImgs,
  testimonials,
};
