import { english } from "@/intl/english.ts";
import { portuguese } from "@/intl/portuguese.ts";
import { RESUME_OPTIONS, type SupportedLanguage } from "@/options.ts";

const layoutTranslations: Record<SupportedLanguage, typeof portuguese> = {
  "en-US": english,
  "pt-BR": portuguese,
};

export const intl = layoutTranslations[RESUME_OPTIONS.language];
