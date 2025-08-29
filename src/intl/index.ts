import { english } from "@/intl/english.ts";
import { portuguese, type Translations } from "@/intl/portuguese.ts";
import { me, type Me } from "@/me";

export interface Intl {
  language: SupportedLanguage;
  t: Translations & { me: Me };
}

export type SupportedLanguage = "en-US" | "pt-BR";

const translations = { "en-US": english, "pt-BR": portuguese };

const language = import.meta.env.VITE_LANGUAGE as SupportedLanguage;
const t = { ...translations[language], me: me[language] };
export const intl: Intl = { language, t };
