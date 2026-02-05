import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/virtual-store.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/financial-risk-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

// export const experiencesData = [
//   {
//     title: 'Trustsoft s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Providing services in the field of information technology services, including administration servers, cloud services, information systems and software development.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Oct 2024 - Present',
//   },
//   {
//     title: 'Granton s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Oct 2024 - Present',
//   },
//   {
//     title: 'WhirrCrew s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Responsible for implemntation of accessible and interactive interface. Working on various projects with AI integration.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Jun 2024 - Present',
//   },
//   {
//     title: 'NAU',
//     location: 'Kyiv, Ukraine',
//     description: `Bachelor's degree in Cybersecurity. The faculty of Cyber Security and Software Engineering.`,
//     icon: React.createElement(BookIcon),
//     date: 'Sep 2022 - Jun 2024',
//   },
// ] as const;

export const experiencesData = [
  {
    title: 'Software Developer',
    location: 'United Health Group, Minnesota',
    description:
      'Designed and maintained backend services using Java, Spring Boot, and Hibernate for healthcare workflows including patient enrollment, provider management, and claims processing, supporting 10K+ active patient records. Developed RESTful APIs within a Microservices Architecture. Deployed applications on AWS EC2, S3, and RDS. Containerized services using Docker and Kubernetes. Implemented asynchronous event processing using Kafka. Integrated AI-powered features using OpenAI APIs for clinical note summarization.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jun 2025 – Current',
  },
  {
    title: 'Software Developer (Intern)',
    location: 'United Health Group, Minnesota',
    description:
      'Assisted in developing backend APIs using Python, Django, and Django REST Framework for patient data intake and appointment scheduling modules, following HIPAA-aware design. Implemented frontend components using JavaScript (ES6), React.js, and Bootstrap. Created schemas using SQL Server. Contributed to lightweight backend services using Node.js and Express.js. Supported deployment activities using AWS EC2 and S3.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jan 2025 – May 2025',
  },
  {
    title: "Master's in Computer Science",
    location: 'University of Houston, Texas, USA',
    description:
      'Focus in Machine Learning, Cloud Computing, and Computer Networks.',
    icon: React.createElement(BookIcon),
    date: 'Aug 2023 – May 2025',
  },
  {
    title: 'Software Engineer',
    location: 'Cybage Software, India',
    description:
      'Built scalable, data-driven APIs for user management and reporting modules using Python and Django REST Framework, optimizing PostgreSQL queries to improve average response time by 20%. Designed responsive UI components using JavaScript (ES6+) and React.js. Implemented lightweight microservices using Node.js and Express.js. Deployed applications on AWS EC2, S3, and RDS. Containerized applications using Docker and Git-based CI/CD pipelines. Created unit and integration test cases using JUnit, PyTest, and Jest.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Feb 2021 – Jun 2023',
  },
  {
    title: "Bachelor's in Computer Science",
    location: 'Vellore Institute of Technology, Amaravati',
    description:
      'Completed B.Tech in Computer Science with focus on software engineering fundamentals and modern application development.',
    icon: React.createElement(BookIcon),
    date: 'Aug 2017 – May 2021',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

// export const projectsData = [
//   {
//     title: 'Audit Master',
//     description: `Audit Master is a platform that streamlines the process of obtaining legal expertise and resources. It automates tasks like GAP Analysis, GAP Reporting, Due Diligence & more.`,
//     tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'SCRUM Methodology'],
//     imageUrl: auditMasterImg,
//     link: 'https://auditmaster.ai/',
//   },
//   {
//     title: 'Demo Automation of accounting documents processing',
//     description:
//       'Upload any receipt or invoice (even a crumpled one from your pocket) and watch our AI accurately extract its data.',
//     tags: ['TypeScript', 'React', 'Docker', 'Next.js', 'GraphQL', 'Tailwind'],
//     imageUrl: accountingImg,
//     link: 'https://demo.grantonai.cz/',
//   },
//   {
//     title: 'FileDrive',
//     description:
//       'A platform for decentralized file storage with robust user management.',
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'Convex',
//       'Clerk',
//       'Shadcn',
//       'Tailwind',
//     ],
//     imageUrl: filedriveImg,
//     link: 'https://github.com/bbyc4kes/file-drive',
//   },
//   {
//     title: 'Portfolio',
//     description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'Framer Motion',
//       'Cloudinary',
//       'React Email',
//       'Tailwind',
//     ],
//     imageUrl: portfolioImg,
//     link: 'https://github.com/bbyc4kes/portfolio',
//   },

//   {
//     title: 'Surge',
//     description:
//       'Service that allows users to build and manage their own websites with integrated payment processing.',
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'MySQL',
//       'Clerk',
//       'Stripe Connect',
//       'Shadcn',
//       'Tailwind',
//     ],
//     imageUrl: surgeImg,
//     link: 'https://github.com/bbyc4kes/surge',
//   },
// ] as const;

export const projectsData = [
  {
    title: 'Scalable Virtual Storefront',
    description:
      'Built an e-commerce platform supporting 10,000+ users. Integrated Stripe API and Twilio for secure payments and notifications. Delivered 30% faster API responses with GraphQL and improved engagement by 25% through responsive UI.',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'GraphQL',
      'Stripe API',
      'MongoDB',
    ],
    imageUrl: carcatalogImg,
    link: 'https://github.com/bengideon',
  },
  {
    title: 'Financial Risk Management Platform',
    description:
      'Developed a real-time risk analysis system using Python and SQL. Automated data ingestion and deployed scalable dashboards with Azure and Docker. Reduced detection latency by 40% and improved decision-making insights.',
    tags: ['Python', 'SQL', 'React.js', 'Node.js', 'Docker', 'Azure'],
    imageUrl: projectmanagementImg,
    link: 'https://github.com/bengideon',
  },
] as const;

export const skillsData = [
  // 🌐 Frontend Technologies
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Bootstrap', '/svgs/etc.svg'],

  // 🛠️ Backend & Frameworks
  ['Java', '/svgs/etc.svg'],
  ['Spring Boot', '/svgs/etc.svg'],
  ['Python', '/svgs/etc.svg'],
  ['Django', '/svgs/etc.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['C#', '/svgs/etc.svg'],
  ['.NET Core', '/svgs/etc.svg'],

  // 🗄️ Databases
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['Redis', '/svgs/etc.svg'],
  ['SQL Server', '/svgs/etc.svg'],

  // ☁️ Cloud Platforms
  ['AWS', '/svgs/etc.svg'],
  ['Azure', '/svgs/etc.svg'],
  ['GCP', '/svgs/etc.svg'],

  // 🚀 DevOps & CI/CD
  ['Docker', '/svgs/Docker.svg'],
  ['Kubernetes', '/svgs/etc.svg'],
  ['Jenkins', '/svgs/etc.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['Terraform', '/svgs/etc.svg'],

  // 🤖 AI/ML & Testing
  ['OpenAI APIs', '/svgs/etc.svg'],
  ['JUnit', '/svgs/etc.svg'],
  ['PyTest', '/svgs/etc.svg'],
  ['Jest', '/svgs/etc.svg'],

  // ➕ Misc
  ['Kafka', '/svgs/etc.svg'],
  ['REST APIs', '/svgs/etc.svg'],
] as const;
