import { StyleSheet, Text, View } from "@react-pdf/renderer";

import type { Language } from "@/me";

import { Languages as LanguagesIcon } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { intl } from "@/intl";
import { spacings, styles, typography } from "@/styles";
import { capitalize } from "@/utlis.ts";

interface LanguagesProps {
  readonly languages: Language[];
}

export function Languages(props: LanguagesProps) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={LanguagesIcon} variant="sectionTitle">
        {intl.languages.title}
      </TextWithIcon>
      <View style={styles.sectionContent}>
        {props.languages.map((language, index) => (
          <LanguageItem {...language} key={index} />
        ))}
      </View>
    </View>
  );
}

const languageStyles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
  flag: { aspectRatio: 3 / 2, height: typography.body.fontSize },
  flagAndNameContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacings.sm,
  },
});

function LanguageItem(props: Language) {
  return (
    <View style={languageStyles.container}>
      <View style={languageStyles.flagAndNameContainer}>
        <props.flag style={languageStyles.flag} />
        <Text style={typography.body}>{props.name}</Text>
      </View>
      <Text style={typography.bodyMuted}>
        {capitalize(intl.languages.languageProficiency[props.proficiency])}
      </Text>
    </View>
  );
}
