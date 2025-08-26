import { Font, StyleSheet } from "@react-pdf/renderer";

import { font, weight } from "@/assets/fonts";
import { oswaldFamily } from "@/assets/fonts/oswald";
import { sourceSansProFamily } from "@/assets/fonts/source-sans-pro";

oswaldFamily.forEach(Font.register);
sourceSansProFamily.forEach(Font.register);

export const colors = {
  background: "#fafafa", // 50
  backgroundMuted: "#f4f4f5", // 100
  border: "#d4d4d8", // 300
  foreground: "#09090b", // 950
  foregroundMuted: "#52525c", // 600
} as const;

export const spacings = {
  lg: 16,
  md: 8,
  sm: 4,
  xl: 32,
  xs: 2,
} as const;

export const typography = StyleSheet.create({
  body: {
    color: colors.foreground,
    fontFamily: font.source,
    fontSize: 8,
    fontWeight: weight.regular,
    letterSpacing: 0.01,
    lineHeight: 1.5,
    textAlign: "justify",
  },
  bodyMuted: {
    color: colors.foregroundMuted,
    fontFamily: font.source,
    fontSize: 8,
    fontWeight: weight.regular,
    letterSpacing: 0.01,
    lineHeight: 1.5,
    textAlign: "justify",
  },
  cardSubtitle: {
    color: colors.foregroundMuted,
    fontFamily: font.source,
    fontSize: 8,
    fontWeight: weight.medium,
    lineHeight: 1.2,
  },
  cardTitle: {
    color: colors.foreground,
    fontFamily: font.source,
    fontSize: 9,
    fontWeight: weight.semibold,
    letterSpacing: -0.1,
    lineHeight: 1.2,
  },
  sectionTitle: {
    color: colors.foreground,
    fontFamily: font.oswald,
    fontSize: 10,
    fontWeight: weight.medium,
    letterSpacing: 0.03,
    lineHeight: 1.2,
    textTransform: "uppercase",
  },
  subtitle: {
    color: colors.foregroundMuted,
    fontFamily: font.source,
    fontSize: 8,
    fontWeight: weight.regular,
    letterSpacing: 0.02,
    lineHeight: 1.3,
    textTransform: "uppercase",
  },
  title: {
    color: colors.foreground,
    fontFamily: font.oswald,
    fontSize: 40,
    fontWeight: weight.light,
    letterSpacing: -0.02,
    lineHeight: 1.1,
    textTransform: "uppercase",
  },
});

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

// not having access display grid or calc sure is a pain :(
export const twoColumnGridStyles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", margin: -spacings.md },
  item: { padding: spacings.md, width: "50%" },
});
