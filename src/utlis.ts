import type { IntlContext, SupportedLanguage } from "@/intl/context.tsx";

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDateRange(
  from: Date,
  to: Date | undefined,
  intl: IntlContext,
): string {
  const formattedFrom = formatDate(from, intl.language);
  if (!to) return intl.t.dateRange.since(formattedFrom);
  const formattedTo = formatDate(to, intl.language);
  return `${formattedFrom} - ${formattedTo}`;
}

function formatDate(date: Date, language: SupportedLanguage): string {
  const dateFormatter = Intl.DateTimeFormat(language, {
    month: "long",
    year: "numeric",
  });
  return capitalize(dateFormatter.format(date));
}
