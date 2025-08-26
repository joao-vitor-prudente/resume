import type { ComponentProps } from "react";

import { StyleSheet, Text, View } from "@react-pdf/renderer";

import type { About, ContactInfo } from "@/me.ts";

import { Separator } from "@/components/icons";
import { colors, spacings, typography } from "@/styles.ts";

const headerStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    flexDirection: "column",
    gap: spacings.lg,
  },
  subtitleContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacings.md,
  },
});

const separatorStyles: ComponentProps<typeof Separator> = {
  height: spacings.md,
  stroke: colors.foregroundMuted,
  width: spacings.md,
};

export function Header(props: About & ContactInfo) {
  return (
    <View style={headerStyles.container}>
      <Text style={typography.title}>{props.name}</Text>
      <View style={headerStyles.subtitleContainer}>
        <Text style={typography.subtitle}>{props.position}</Text>
        <Separator {...separatorStyles} />
        <Text style={typography.subtitle}>{props.address}</Text>
        <Separator {...separatorStyles} />
        <Text style={typography.subtitle}>{props.phone}</Text>
      </View>
    </View>
  );
}
