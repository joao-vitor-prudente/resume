import type { ComponentProps, ComponentType, ReactNode } from "react";

import { StyleSheet, type Svg, Text, View } from "@react-pdf/renderer";

import { colors, spacings, typography } from "@/styles.ts";

interface TextWithIconProps {
  readonly children: ReactNode;
  readonly Icon: ComponentType<ComponentProps<typeof Svg>>;
  readonly variant?: Variants;
}

type Variants = "body" | "cardTitle" | "sectionTitle";

const iconConfig: Record<Variants, ComponentProps<typeof Svg>> = {
  body: {
    height: typography.body.fontSize,
    stroke: colors.foregroundMuted,
    strokeWidth: 1.8,
    width: typography.body.fontSize,
  },
  cardTitle: {
    height: typography.cardTitle.fontSize,
    stroke: colors.foregroundMuted,
    strokeWidth: 2,
    width: typography.cardTitle.fontSize,
  },
  sectionTitle: {
    height: typography.sectionTitle.fontSize,
    stroke: colors.foreground,
    strokeWidth: 2,
    width: typography.sectionTitle.fontSize,
  },
};

const containerStyles = StyleSheet.create({
  body: { flexDirection: "row", gap: spacings.sm },
  cardTitle: { flexDirection: "row", gap: spacings.sm },
  sectionTitle: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacings.sm,
  },
});

export function TextWithIcon(props: TextWithIconProps) {
  const variant = props.variant ?? "body";
  return (
    <View style={containerStyles[variant]}>
      <props.Icon {...iconConfig[variant]} />
      <Text style={typography[variant]}>{props.children}</Text>
    </View>
  );
}
