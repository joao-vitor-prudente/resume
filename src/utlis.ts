import { translatedLayout } from "@/layout-translations.ts";
import { RESUME_OPTIONS } from "@/options.ts";

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDateRange(from: Date, to?: Date): string {
  if (to) return `${formatDate(to)} - ${formatDate(to)}`;
  return translatedLayout.dateRange.since(formatDate(from));
}

function formatDate(date: Date): string {
  const dateFormatter = Intl.DateTimeFormat(RESUME_OPTIONS.language, {
    month: "long",
    year: "numeric",
  });
  return capitalize(dateFormatter.format(date));
}
