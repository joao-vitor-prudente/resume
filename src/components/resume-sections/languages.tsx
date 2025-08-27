import { Text, View } from "@react-pdf/renderer";

import type { Language } from "@/me.ts";

import { Languages as LanguagesIcon } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { styles, typography } from "@/styles.ts";
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

function LanguageItem(props: Language) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TextWithIcon Icon={props.flag}>{props.name}</TextWithIcon>
      <Text style={typography.bodyMuted}>
        {capitalize(formatProficiency(props.proficiency))}
      </Text>
    </View>
  );
}
