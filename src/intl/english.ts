import type { Translations } from "@/intl/portuguese.ts";

export const english: Translations = {
  contactInfo: { title: "contact information" },
  courses: { link: "diploma Url", title: "courses" },
  dateRange: { since: (date: string) => `since ${date}` },
  employmentHistory: {
    jobTitle: (position: string, company: string, city: string) =>
      `${position} at ${company} - ${city}`,
    title: "employment history",
  },
  footer: {
    description: "this resume was generated using ReactJS.",
    link: "source code Url",
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
