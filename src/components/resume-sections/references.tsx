import { Text, View } from "@react-pdf/renderer";

import type { Reference } from "@/me.ts";

import { Mail, Megaphone, Phone } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { spacings, styles, twoColumnGridStyles, typography } from "@/styles.ts";

interface ReferencesProps {
  readonly references: Reference[];
}

export function References(props: ReferencesProps) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={Megaphone} variant="sectionTitle">
        referências
      </TextWithIcon>
      <View style={twoColumnGridStyles(spacings.md).container}>
        {props.references.map((reference, index) => (
          <View style={twoColumnGridStyles(spacings.md).item}>
            <ReferenceCard {...reference} key={index} />
          </View>
        ))}
      </View>
    </View>
  );
}

function ReferenceCard(props: Reference) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={typography.cardTitle}>{props.name}</Text>
        <Text style={typography.cardSubtitle}>{props.company}</Text>
      </View>
      <View style={styles.cardContent}>
        <TextWithIcon Icon={Mail}>{props.contactInfo.email}</TextWithIcon>
        <TextWithIcon Icon={Phone}>{props.contactInfo.phone}</TextWithIcon>
      </View>
    </View>
  );
}
