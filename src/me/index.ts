import type { SupportedLanguage } from "@/intl";
import type { Me } from "@/me/type.ts";

import { portuguese } from "@/me/portuguese.ts";

export * from "@/me/type.ts";

import { english } from "@/me/english.ts";

export const me: Record<SupportedLanguage, Me> = {
  "en-US": english,
  "pt-BR": portuguese,
};
