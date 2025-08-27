import { StyleSheet, Text, View } from "@react-pdf/renderer";

import type { Language } from "@/me.ts";

import { Languages as LanguagesIcon } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { spacings, styles, typography } from "@/styles.ts";
import { capitalize } from "@/utlis.ts";

interface LanguagesProps {
  readonly languages: Language[];
}

export function Languages(props: LanguagesProps) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={LanguagesIcon} variant="sectionTitle">
        idiomas
      </TextWithIcon>
      <View style={styles.sectionContent}>
        {props.languages.map((language, index) => (
          <LanguageItem {...language} key={index} />
        ))}
      </View>
    </View>
  );
}

function formatProficiency(proficiency: Language["proficiency"]): string {
  switch (proficiency) {
    case "advanced":
      return "avançado";
    case "beginner":
      return "iniciante";
    case "fluent":
      return "fluente";
    case "native":
      return "nativo";
  }
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
        {capitalize(formatProficiency(props.proficiency))}
      </Text>
    </View>
  );
}
