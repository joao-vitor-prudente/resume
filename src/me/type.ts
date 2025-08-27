import type { Image, Svg } from "@react-pdf/renderer";
import type { ComponentProps, ComponentType } from "react";

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
  flag: ComponentType<Omit<ComponentProps<typeof Image>, "source">>;
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
