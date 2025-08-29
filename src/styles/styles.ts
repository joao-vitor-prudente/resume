import { StyleSheet } from "@react-pdf/renderer";

import { colors, spacings } from "@/styles/constants.ts";
import { typography } from "@/styles/typography.ts";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundMuted,
    borderRadius: spacings.sm,
    flexDirection: "column",
    gap: spacings.md,
    padding: spacings.md,
  },
  cardContent: {
    flexDirection: "column",
    gap: spacings.sm,
  },
  cardHeader: {
    flexDirection: "column",
    gap: spacings.xs,
  },
  page: {
    background: colors.background,
    flexDirection: "column",
    gap: spacings.lg,
    padding: spacings.xl,
  },
  pageContent: {
    flexGrow: 1,
  },
  pageFooter: {
    borderTopColor: colors.border,
    borderTopStyle: "solid",
    borderTopWidth: 1,
    flexDirection: "column",
  },
  section: {
    flexDirection: "column",
    gap: spacings.md,
  },
  sectionContent: {
    flexDirection: "column",
    gap: spacings.sm,
  },
});

export const listStyles = StyleSheet.create({
  list: {
    borderLeftColor: colors.border,
    borderLeftStyle: "solid",
    borderLeftWidth: 0.5,
    flexDirection: "column",
    gap: spacings.sm,
    paddingLeft: spacings.md,
  },
  listItem: { ...typography.body, lineHeight: 1.2 },
});
