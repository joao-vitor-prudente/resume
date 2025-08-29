import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";

import type { Projects } from "@/me";

import { Link as LinkIcon } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { translatedLayout } from "@/layout-translations.ts";
import { spacings, typography } from "@/styles";
import { capitalize } from "@/utlis.ts";

const footerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacings.md,
    justifyContent: "center",
  },
});

export function Footer(props: Projects) {
  return (
    <View style={footerStyles.container}>
      <Text style={typography.body}>
        {capitalize(translatedLayout.footer.description)}
      </Text>
      <TextWithIcon Icon={LinkIcon}>
        <Link href={props.resume} style={typography.body}>
          {capitalize(translatedLayout.footer.link)}
        </Link>
      </TextWithIcon>
    </View>
  );
}
