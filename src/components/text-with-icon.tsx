import type { ComponentProps, ComponentType, ReactNode } from "react";

import { type Svg, Text, View } from "@react-pdf/renderer";

import { colors, fontSizes, spacings, typography } from "@/styles.ts";

interface TextWithIconProps {
  readonly children: ReactNode;
  readonly Icon: ComponentType<ComponentProps<typeof Svg>>;
  readonly variant?: Variants;
}

type Variants = "body" | "cardTitle" | "sectionTitle";

const iconConfig: Record<Variants, ComponentProps<typeof Svg>> = {
  body: {
    height: fontSizes.body,
    stroke: colors.foregroundMuted,
    strokeWidth: 1.8,
    width: fontSizes.body,
  },
  cardTitle: {
    height: fontSizes.cardTitle,
    stroke: colors.foregroundMuted,
    strokeWidth: 2,
    width: fontSizes.cardTitle,
  },
  sectionTitle: {
    height: fontSizes.sectionTitle,
    stroke: colors.foreground,
    strokeWidth: 2,
    width: fontSizes.sectionTitle,
  },
};

export function TextWithIcon(props: TextWithIconProps) {
  return (
    <View style={{ flexDirection: "row", gap: spacings.sm }}>
      <props.Icon {...iconConfig[props.variant ?? "body"]} />
      <Text style={typography[props.variant ?? "body"]}>{props.children}</Text>
    </View>
  );
}
