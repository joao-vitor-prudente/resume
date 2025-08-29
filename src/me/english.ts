import type { Me } from "@/me/type.ts";

import { Brazil, China, UnitedStates } from "@/components/flags";
import {
  Beef,
  Building,
  CircleEllipsis,
  Cloud,
  CodeXml,
  Database,
  Javascript,
  Languages,
  Pi,
  Python,
} from "@/components/icons";

export const english: Me = {
  about: {
    name: "João Vitor Ceolin Prudente",
    position: "Full-Stack Software Engineer",
    profile:
      "Full-stack software engineer with four years of professional experience, highly skilled in designing and implementing robust solutions for complex business challenges. Exceptionally organized, methodical, and detail-oriented, with a strong passion for programming and delivering high-quality code. A clear and systematic communicator, capable of articulating problems, solutions, and system architectures precisely and accessibly. Dedicated to maintaining consistency and excellence in all aspects of software development.",
  },
  contactInfo: {
    address: "SHIN QI 3 conjunto 9, 24, Brasília, 71505-290, Brazil",
    email: "jvitor.prudente@gmail.com",
    phone: "+55 (61) 99864-5645",
  },
  courses: [
    {
      description:
        "Specialization program lasting one semester, covering in-depth the mathematics and algorithms behind artificial intelligence, including regression models, standard and convolutional neural networks, decision trees, recommendation systems, and genetic algorithms.",
      diplomaUrl:
        "https://www.coursera.org/account/accomplishments/specialization/ZKB634W28J5U",
      institution: "Stanford University",
      name: "Machine Learning Specialization",
    },
  ],
  employmentHistory: [
    {
      activities: [
        "Developed automation systems to increase the productivity and scalability of the company’s administrative operations.",
      ],
      city: "Brasília",
      company: "Grupo 5 Estrelas Serviços de Apoio Administrativo",
      description:
        "At Grupo 5 Estrelas I worked extensively with data pipelines, automation scripts, system integrations, and desktop interfaces in Python. In addition, I gained a deep understanding of how each administrative department functions to sustain a business.",
      from: new Date(2021, 1, 1),
      position: "Administrative Assistant and Software Developer",
      to: new Date(2022, 7, 1),
    },
    {
      activities: [
        "Designed and developed multiple ReactJS front-end applications from scratch, which became most of the internal tools used within the company.",
        "Maintained multiple Flutter mobile applications, including the Origem battery reservation app, available on the Play Store.",
        "Maintained a firmware management system for remote updates across different company hardware products.",
      ],
      city: "Brasília",
      company: "Origem Locadora de Motos S.A.",
      description:
        "At Origem, I worked across multiple areas of software development: ReactJS front-end, NestJS back-end, AWS infrastructure and DevOps, databases, and UI/UX with Figma. I also specialized in modeling and developing distributed, event-driven systems.",
      from: new Date(2023, 3, 1),
      position: "Software Engineer",
      to: new Date(2024, 8, 1),
    },
    {
      activities: [
        "Maintained the Régia project, a political consulting tool that extracts, organizes, and catalogs data from various Brazilian government agencies, enhanced with operational and artificial intelligence.",
        "Developed the Personia project, a tool for creating artificial personas for marketing research.",
      ],
      city: "Brasília",
      company: "Novatics - Technology and Innovation",
      description:
        "At Novatics I worked with complex data pipelines and integrations with government systems in Python, and a corporate-scale full-stack NextJS application in the Régia project. In the Personia project, I worked with a ReactJS front-end and a Django back-end, deepening my experience in integrating third-party AI models.",
      from: new Date(2024, 9, 1),
      position: "Software Engineer",
      to: new Date(2025, 4, 1),
    },
  ],
  hobbies: [
    {
      icon: CodeXml,
      name: "Studying Programming",
    },
    {
      icon: Languages,
      name: "Learning Languages",
    },
    {
      icon: Pi,
      name: "Studying Mathematics",
    },
    {
      icon: Beef,
      name: "Brazilian Barbecue",
    },
  ],
  languages: [
    {
      flag: Brazil,
      name: "Portuguese",
      proficiency: "native",
    },
    {
      flag: UnitedStates,
      name: "English",
      proficiency: "fluent",
    },
    {
      flag: China,
      name: "Mandarin",
      proficiency: "beginner",
    },
  ],
  projects: {
    github: "https://github.com/joao-vitor-prudente",
    resume: "https://github.com/joao-vitor-prudente/resume",
  },
  references: [
    {
      company: "Grupo 5 Estrelas Serviços de Apoio Administrativo",
      contactInfo: {
        email: "anapaula@grupo5estrelas.com.br",
        phone: "+55 (61) 99639-3817",
      },
      name: "Ana Paula Campos",
    },
    {
      company: "Origem Locadora de Motos S.A.",
      contactInfo: {
        email: "danilo@origemmotos.com.br",
        phone: "+55 (61) 98838-0214",
      },
      name: "Danilo Mendonça",
    },
    {
      company: "Origem Locadora de Motos S.A.",
      contactInfo: {
        email: "diogo@origemmotos.com.br",
        phone: "+55 (61) 99968-8311",
      },
      name: "Diogo Lisita",
    },
  ],
  skills: [
    {
      description:
        "Experience with backend development in Django, building ETLs including web scraping and data pipelines, implementing neural networks, and developing desktop UIs.",
      icon: Python,
      title: "Python",
    },
    {
      description:
        "Experience with backend development in NestJS and ExpressJS, front-end in ReactJS, full-stack in NextJS, and mobile in React Native, with a particular emphasis on front-end development.",
      icon: Javascript,
      title: "Javascript/Typescript",
    },
    {
      description:
        "Experience with Postgres, SQLite, and MySQL databases, both in data modeling and cloud provisioning.",
      icon: Database,
      title: "Databases",
    },
    {
      description:
        "Experience with Event-Driven Architecture, Domain-Driven Design, and Test-Driven Development.",
      icon: Building,
      title: "Architecture",
    },
    {
      description:
        "Experience with AWS and Vercel, and implementing DevOps pipelines using both GitLab and GitHub.",
      icon: Cloud,
      title: "Infrastructure",
    },
    {
      description:
        "Experience with Dart/Flutter for Android development, and brief exposure to C, C#/Unity, and Rust.",
      icon: CircleEllipsis,
      title: "Other Languages",
    },
  ],
};
