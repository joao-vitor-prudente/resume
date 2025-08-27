export type SupportedLanguage = "en-US" | "pt-BR";

interface ResumeOptions {
  language: SupportedLanguage;
}

export const RESUME_OPTIONS: ResumeOptions = {
  language: "en-US",
};
