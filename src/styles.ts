import { Font, StyleSheet } from "@react-pdf/renderer";

import RobotoCondensedBold from "@/assets/fonts/roboto/roboto-condensed-bold.ttf";
import RobotoCondensedMedium from "@/assets/fonts/roboto/roboto-condensed-medium.ttf";
import RobotoCondensedRegular from "@/assets/fonts/roboto/roboto-condensed-regular.ttf";
import RobotoCondensedSemibold from "@/assets/fonts/roboto/roboto-condensed-semibold.ttf";
import RobotoRegular from "@/assets/fonts/roboto/roboto-regular.ttf";

const fonts = {
  roboto: "Roboto",
  robotoCondensed: "RobotoCondensed",
} as const;

Font.register({
  family: fonts.roboto,
  fontWeight: "normal",
  src: RobotoRegular,
});
Font.register({
  family: fonts.robotoCondensed,
  fontWeight: "bold",
  src: RobotoCondensedBold,
});
Font.register({
  family: fonts.robotoCondensed,
  fontWeight: "semibold",
  src: RobotoCondensedSemibold,
});
Font.register({
  family: fonts.robotoCondensed,
  fontWeight: "medium",
  src: RobotoCondensedMedium,
});
Font.register({
  family: fonts.robotoCondensed,
  fontWeight: "normal",
  src: RobotoCondensedRegular,
});

export const colors = {
  background: "#fafafa",
  backgroundMuted: "#e4e4e7",
  border: "#d4d4d8",
  foreground: "#09090b",
  foregroundMuted: "#52525c",
} as const;

export const fontSizes = {
  body: "10pt",
  cardSubtitle: "12pt",
  cardTitle: "12pt",
  sectionTitle: "16pt",
  subtitle: "16pt",
  title: "32pt",
} as const;

export const spacings = {
  lg: "16pt",
  md: "8pt",
  sm: "4pt",
  xl: "32pt",
  xs: "2pt",
};

export const typography = StyleSheet.create({
  body: {
    color: colors.foreground,
    fontFamily: fonts.roboto,
    fontSize: fontSizes.body,
    fontWeight: "normal",
    letterSpacing: "0.01",
    lineHeight: "1.5",
  },
  bodyMuted: {
    color: colors.foregroundMuted,
    fontFamily: fonts.roboto,
    fontSize: fontSizes.body,
    fontWeight: "normal",
    letterSpacing: "0.01",
    lineHeight: "1.5",
  },
  cardSubtitle: {
    color: colors.foregroundMuted,
    fontFamily: fonts.robotoCondensed,
    fontSize: fontSizes.cardSubtitle,
    fontWeight: "medium",
    lineHeight: "1.2",
  },
  cardTitle: {
    color: colors.foreground,
    fontFamily: fonts.robotoCondensed,
    fontSize: fontSizes.cardTitle,
    fontWeight: "semibold",
    lineHeight: "1.2",
  },
  sectionTitle: {
    color: colors.foreground,
    fontFamily: fonts.robotoCondensed,
    fontSize: fontSizes.sectionTitle,
    fontWeight: "bold",
    letterSpacing: "0.03",
    lineHeight: "1.2",
  },
  subtitle: {
    color: colors.foregroundMuted,
    fontFamily: fonts.robotoCondensed,
    fontSize: fontSizes.subtitle,
    fontWeight: "medium",
    letterSpacing: "0.02",
    lineHeight: "1.3",
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.robotoCondensed,
    fontSize: fontSizes.title,
    fontWeight: "bold",
    letterSpacing: "-0.01",
    lineHeight: "1.1",
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
    borderTopWidth: "1pt",
    flexDirection: "column",
  },
  pageHeader: {
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: "1pt",
    flexDirection: "column",
    gap: spacings.lg,
  },
  section: {
    flexDirection: "column",
    gap: spacings.lg,
  },
  sectionContent: {
    flexDirection: "column",
    gap: spacings.md,
  },
});
