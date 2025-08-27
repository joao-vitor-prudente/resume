export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDateRange(from: Date, to?: Date): string {
  if (!to) return `Desde ${formatDate(from)}`;
  return `${formatDate(to)} - ${formatDate(to)}`;
}

function formatDate(date: Date): string {
  const dateFormatter = Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  });
  return capitalize(dateFormatter.format(date));
}
