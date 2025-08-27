import { StyleSheet, Text, View } from "@react-pdf/renderer";

import type { About, ContactInfo } from "@/me";

import { colors, spacings, typography } from "@/styles.ts";

const headerStyles = StyleSheet.create({
  container: {
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    flexDirection: "column",
    gap: spacings.md,
    paddingBottom: spacings.lg,
  },
});

export function Header(props: About & ContactInfo) {
  return (
    <View style={headerStyles.container}>
      <Text style={typography.title}>{props.name}</Text>
      <Text style={typography.subtitle}>{props.position}</Text>
    </View>
  );
}
