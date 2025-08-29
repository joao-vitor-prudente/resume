export const portuguese = {
  contactInfo: { title: "informações de contato" },
  courses: { link: "link do diploma", title: "cursos" },
  dateRange: { since: (date: string) => `desde ${date}` },
  employmentHistory: {
    jobTitle: (position: string, company: string, city: string) =>
      `${position} em ${company} - ${city}`,
    title: "histórico empregatício",
  },
  footer: {
    description: "este currículo foi gerado com ReactJS.",
    link: "link do código fonte",
  },
  hobbies: { title: "hobbies" },
  languages: {
    languageProficiency: {
      advanced: "avançado",
      beginner: "iniciante",
      fluent: "fluente",
      native: "nativo",
    },
    title: "idiomas",
  },
  profile: { title: "perfil" },
  projects: {
    github: { link: "link do perfil do GitHub", title: "GitHub" },
    title: "projetos",
  },
  references: { title: "referências" },
  skills: { title: "habilidades" },
};

export type Translations = typeof portuguese;
