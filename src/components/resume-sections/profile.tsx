import { Text, View } from "@react-pdf/renderer";

import type { About } from "@/me.ts";

import { User } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { styles, typography } from "@/styles.ts";

export function Profile(props: About) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={User} variant="sectionTitle">
        perfil
      </TextWithIcon>
      <View style={styles.sectionContent}>
        <Text style={typography.body}>{props.profile}</Text>
      </View>
    </View>
  );
}
