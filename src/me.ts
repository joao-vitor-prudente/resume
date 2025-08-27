import type { ComponentProps, ComponentType } from "react";

import { Svg } from "@react-pdf/renderer";

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

export interface About {
  name: string;
  position: string;
  profile: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

export interface Course {
  description: string;
  diplomaUrl?: string;
  institution: string;
  name: string;
}

export interface Hobby {
  icon: ComponentType<ComponentProps<typeof Svg>>;
  name: string;
}

export interface Job {
  activities: string[];
  city: string;
  company: string;
  description: string;
  from: Date;
  position: string;
  to: Date;
}

export interface Language {
  flag: ComponentType<ComponentProps<typeof Svg>>;
  name: string;
  proficiency: "advanced" | "beginner" | "fluent" | "native";
}

export interface Me {
  about: About;
  contactInfo: ContactInfo;
  courses: Course[];
  employmentHistory: Job[];
  hobbies: Hobby[];
  languages: Language[];
  references: Reference[];
  skills: Skill[];
}

export interface Reference {
  company: string;
  contactInfo: Pick<ContactInfo, "email" | "phone">;
  name: string;
}

export interface Skill {
  description: string;
  icon: ComponentType<ComponentProps<typeof Svg>>;
  title: string;
}

export const me: Me = {
  about: {
    name: "João Vitor Ceolin Prudente",
    position: "Engenheiro de Software Full-Stack",
    profile:
      "Engenheiro de software full-stack com quatro anos de experiência profissional na área, altamente capacitado em projetar e implementar soluções robustas para desafios complexos de negócio. Excepcionalmente organizado, metódico e detalhista, com paixão por programação e entrega de código de alta qualidade. Um comunicador claro e sistemático, capaz de articular problemas, soluções e arquitetura de sistemas de maneira precisa e acessível. Dedicado a manter consistência e excelência em todos os aspectos do desenvolvimento de software.",
  },
  contactInfo: {
    address: "SHIN QI 3 conjunto 9, 24, Brasília, 71505-290, Brasil",
    email: "jvitor.prudente@gmail.com",
    phone: "+55 (61) 99864-5645",
  },
  courses: [
    {
      description:
        "Programa de especialização com duração de 1 semestre abordando a fundo a matemática e os algorítmos por traz da inteligência artificial incluindo modelos de regressão, redes neurais comuns e de convolução, árvores de decisão, sistemas de recomendação e algoritmos genéticos.",
      diplomaUrl:
        "https://www.coursera.org/account/accomplishments/specialization/ZKB634W28J5U",
      institution: "Stanford University",
      name: "Machine Learning Specialization",
    },
  ],
  employmentHistory: [
    {
      activities: [
        "Desenvolvi sistemas de automação para aumentar a produtividade e escalabilidade das operações administrativas da empresa.",
      ],
      city: "Brasília",
      company: "Grupo 5 Estrelas Serviços de Apoio Administrativo",
      description:
        "No Grupo 5 Estrelas trabalhei extensivamente com pipelines de dados, scripts de automação, integração de sistemas e interfaces gráficas para desktop em python. Além disso, pude entender a fundo como cada departamento departamento administrativo funciona para manter uma empresa.",
      from: new Date(2021, 1, 1),
      position: "Assistente Administrativo e Desenvolvedor de Software",
      to: new Date(2022, 7, 1),
    },
    {
      activities: [
        "Projetei e desenvolvi do zero múltiplas aplicações front end ReactJS, às quais constituíam a maioria das ferramentas internas utilizadas na empresa.",
        "Mantive múltiplas aplicações mobile Flutter, incluindo o aplicativo Origem de reserva de baterias, que pode ser encontrado na Play Store.",
        "Mantive um sistema de gerenciamento e envio remoto de atualizações de firmware para diferentes hardwares de produtos da empresa.",
      ],
      city: "Brasília",
      company: "Origem Locadora de Motos S.A.",
      description:
        "Na Origem trabalhei em múltiplas as areas do desenvolvimento de software, frontend em ReactJS, backend em NestJS, infraestrutura AWS e dev-ops, bancos de dados e UI/UX com figma. Também pude me especializar na modelagem e desenvolvimento de sistemas distribuídos dirigidos por eventos.",
      from: new Date(2023, 3, 1),
      position: "Engenheiro de Software",
      to: new Date(2024, 8, 1),
    },
    {
      activities: [
        "Mantive o projeto Régia, uma ferramenta de consultoria política que extrai, organiza e, com o auxilio de inteligência operacional e inteligência artificial, cataloga todos os dados de diversos órgãos do governo brasileiro.",
        "Desenvolvi o projeto Personia, uma ferramenta de criação de personas artificiais para pesquisas de marketing.",
      ],
      city: "Brasília",
      company: "Novatics - Tecnologia e Inovação",
      description:
        "Na Novatics trabalhei com pipelines complexas de dados e integração com sistemas do governo em python e uma aplicação fullstack em escala corporativa em NextJS no projeto Régia. No projeto Personia, trabalhei com um frontend ReactJS e um backend Django e me aprofundei na integração de modelos terceirizados de inteligência artificial.",
      from: new Date(2024, 9, 1),
      position: "Engenheiro de Software",
      to: new Date(2025, 4, 1),
    },
  ],
  hobbies: [
    {
      icon: CodeXml,
      name: "Estudar Programação",
    },

    {
      icon: Languages,
      name: "Aprender Idiomas",
    },

    {
      icon: Pi,
      name: "Estudar Matemática",
    },

    {
      icon: Beef,
      name: "Fazer Churrasco",
    },
  ],
  languages: [
    {
      flag: Brazil,
      name: "Português",
      proficiency: "native",
    },
    {
      flag: UnitedStates,
      name: "Inglês",
      proficiency: "fluent",
    },
    {
      flag: China,
      name: "Mandarim",
      proficiency: "beginner",
    },
  ],
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
        "Trabalhei com desenvolvimento backend em Django, desenvolvimento de ETLs incluindo web scraping e pipeline de dados, implementação de redes neurais e criação UIs para desktop.",
      icon: Python,
      title: "Python",
    },
    {
      description:
        "Trabalhei com desenvolvimento backend em NestJS e ExpressJS, frontend em ReactJS, fullstack em NextJs e mobile em ReactNative, com destaque no desenvolvimento frontend.",
      icon: Javascript,
      title: "Javascript/Typescript",
    },
    {
      description:
        "Trabalhei com bancos de dados Postgres, SQLite e MySQL tanto na modelagem de dados, quanto no provisionamento em nuvem.",
      icon: Database,
      title: "Banco de Dados",
    },
    {
      description:
        "Trabalhei com Arquitetura Dirigida por Eventos, Design Dirigido por Domínio e Desenvolvimento Dirigido por Testes.",
      icon: Building,
      title: "Arquitetura",
    },
    {
      description:
        "Trabalhei com AWS e Vercel e implementei pipelines de dev-ops utilizando tanto GitLab, quanto o GitHub.",
      icon: Cloud,
      title: "Infraestrutura",
    },
    {
      description:
        "Trabalhei com Dart/Flutter para desenvolvimento Android e brevemente com C, C#/Unity e Rust.",
      icon: CircleEllipsis,
      title: "Outras Linguagens",
    },
  ],
};
