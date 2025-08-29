import { StyleSheet, Text, View } from "@react-pdf/renderer";

import type { About, ContactInfo } from "@/me";

import { spacings, typography } from "@/styles";

const headerStyles = StyleSheet.create({
  container: { flexDirection: "column", gap: spacings.md },
});

export function Header(props: About & ContactInfo) {
  return (
    <View style={headerStyles.container}>
      <Text style={typography.title}>{props.name}</Text>
      <Text style={typography.subtitle}>{props.position}</Text>
    </View>
  );
}
