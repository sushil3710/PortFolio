import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Structures ",
    icon: backend,
  },
  {
    title: "C/C++",
    icon: jobit,
  },
  {
    title: "Database SQL",
    icon: mobile,
  },
  {
    title: "Java",
    icon: tailwind,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "Verilog",
    icon: docker,
  },
  
  
];

const technologies = [


  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];


const experiences = [
  {
    title: "Software Developer",
    company_name: "Samsung",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Conducted comprehensive testing on developed functions, meticulously creating test cases to cover a wide array of scenarios,increasing overall coverage, enhancing the product’s stability and functionality",
      "Deployment of test cases on Samsung’s testing servers, executing thorough evaluations to identify and rectify issues.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Appreciated by Team and Manager for consistency and smart work",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PG Admissions Portal",
    description:
      "The website we developed serves as a centralized platform for students aspiring to pursue postgraduate studies at theprestigious IIT Ropar. This offers students a seamless and user-friendly application process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "psql",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sushil3710/PHD_Admission_Portal",
  },
  {
    name: "Utility Based Cache Partitioning",
    description:
      "Enhanced cache replacement policy code, enabling dynamic partitioning in the last-level cache.Conducted extensive trace runs on Champsim, showcasing significant enhancements in results following the implementationof dynamic partitioning and cache replacement policy upgrades.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Champsim",
        color: "green-text-gradient",
      },
    ],
    image: creator,
    source_code_link: "https://github.com/sushil3710/UCP",
  },
  {
    name: "Railway Ticket Booking Portal",
    description:
      "Utilized a database system to efficiently manage railway operations, enhancing data storage and retrieval capabilities. The implementation incorporated Java for seamless interaction and leveraged multi-threading to ensure program synchronization.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "psql",
        color: "green-text-gradient",
      },
    ],
    image: tesla,
    source_code_link: "https://github.com/sushil3710/Railway-Ticket-Booking",
  },
  {
    name: "Hostel Management",
    description:
      "Developed a user-friendly web platform facilitating seamless registration of student complaints, streamlining communication with hostel authorities. Enabling a conducive and organized hostel environment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "psql",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sushil3710/Hostel_Management_Portal",
  },
  {
    name: "Academic Portal with CLI interface ",
    description:
      "A command-line interface (CLI) academic portal designed for efficient management of student academic records. The portal accommodates three user roles: students, faculty, and administrators, fostering seamless interaction and functionality.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Jtest",
        color: "green-text-gradient",
      },
    
    ],
    image: meta,
    source_code_link: "https://github.com/sushil3710/Cucu",
  },
  {
    name: "Cucu: Custom Language Compiler",
    description:
      "Developed a basic C++ compiler using Lex and Yacc, focusing on a simplifie grammar and regular expressions for lexical analysis.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Lex",
        color: "green-text-gradient",
      },
      {
        name: "Yacc",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sushil3710/Cucu",
  },
  {
    name: "Vending Machine",
    description:
      "The project involved designing a vending machine using Verilog. This system accepts a specified amount of money and dispenses the selected product along with any necessary change.",
    tags: [
      {
        name: "Verilog",
        color: "blue-text-gradient",
      },
      {
        name: "Digital Logic",
        color: "green-text-gradient",
      },
    ],
    image: shopify,
    source_code_link: "https://github.com/sushil3710/CS203project",
  },
];

export { services, technologies, experiences, testimonials, projects };
