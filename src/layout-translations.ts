import { RESUME_OPTIONS, type SupportedLanguage } from "@/options.ts";

const portuguese = {
  date: {
    since: "desde",
  },
  languageProficiency: {
    advanced: "avançado",
    beginner: "iniciante",
    fluent: "fluente",
    native: "nativo",
  },
  sectionTitle: {
    contactInfo: "informações de contato",
    courses: "cursos",
    employmentHistory: "histórico empregatício",
    hobbies: "hobbies",
    languages: "idiomas",
    profile: "perfil",
    references: "referências",
    skills: "habilidades",
  },
};

const english: typeof portuguese = {
  date: {
    since: "since",
  },
  languageProficiency: {
    advanced: "advanced",
    beginner: "beginner",
    fluent: "fluent",
    native: "native",
  },
  sectionTitle: {
    contactInfo: "contact information",
    courses: "courses",
    employmentHistory: "employment history",
    hobbies: "hobbies",
    languages: "languages",
    profile: "profile",
    references: "references",
    skills: "skills",
  },
};

const layoutTranslations: Record<SupportedLanguage, typeof portuguese> = {
  "en-US": english,
  "pt-BR": portuguese,
};

export const translatedLayout = layoutTranslations[RESUME_OPTIONS.language];
