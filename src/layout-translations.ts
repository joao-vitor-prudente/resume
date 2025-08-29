import { RESUME_OPTIONS, type SupportedLanguage } from "@/options.ts";

const portuguese = {
  contactInfo: { title: "informações de contato" },
  courses: { link: "link do diploma", title: "cursos" },
  dateRange: { since: (date: string) => `desde ${date}` },
  employmentHistory: {
    jobTitle: (position: string, company: string, city: string) =>
      `${position} em ${company} - ${city}`,
    title: "histórico empregatício",
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

const english: typeof portuguese = {
  contactInfo: { title: "contact information" },
  courses: { link: "diploma Url", title: "courses" },
  dateRange: { since: (date: string) => `since ${date}` },
  employmentHistory: {
    jobTitle: (position: string, company: string, city: string) =>
      `${position} at ${company} - ${city}`,
    title: "employment history",
  },
  hobbies: { title: "hobbies" },
  languages: {
    languageProficiency: {
      advanced: "advanced",
      beginner: "beginner",
      fluent: "fluent",
      native: "native",
    },
    title: "languages",
  },
  profile: { title: "profile" },
  projects: {
    github: { link: "GitHub profile Url", title: "GitHub" },
    title: "projects",
  },
  references: { title: "references" },
  skills: { title: "skills" },
};

const layoutTranslations: Record<SupportedLanguage, typeof portuguese> = {
  "en-US": english,
  "pt-BR": portuguese,
};

export const translatedLayout = layoutTranslations[RESUME_OPTIONS.language];
