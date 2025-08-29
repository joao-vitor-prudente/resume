import { Font, StyleSheet } from "@react-pdf/renderer";

import { font, weight } from "@/assets/fonts";
import { oswaldFamily } from "@/assets/fonts/oswald";
import { sourceSansProFamily } from "@/assets/fonts/source-sans-pro";
import { colors } from "@/styles/constants.ts";

oswaldFamily.forEach(Font.register);
sourceSansProFamily.forEach(Font.register);

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
    fontSize: 12,
    fontWeight: weight.regular,
    letterSpacing: 0.02,
    lineHeight: 1.3,
    textAlign: "justify",
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
