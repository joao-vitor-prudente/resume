import { Text, View } from "@react-pdf/renderer";

import type { Reference } from "@/me";

import { Mail, Megaphone, Phone } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { translatedLayout } from "@/layout-translations.ts";
import { gridStyles, spacings, styles, typography } from "@/styles";

interface ReferencesProps {
  readonly references: Reference[];
}

export function References(props: ReferencesProps) {
  const grid = gridStyles({ columns: 2, gap: spacings.md });

  return (
    <View style={styles.section}>
      <TextWithIcon Icon={Megaphone} variant="sectionTitle">
        {translatedLayout.references.title}
      </TextWithIcon>
      <View style={grid.container}>
        {props.references.map((reference, index) => (
          <View style={grid.item({ colspan: 1 })}>
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
