import { Text, View } from "@react-pdf/renderer";

import type { About } from "@/me";

import { User } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { intl } from "@/intl";
import { styles, typography } from "@/styles";

export function Profile(props: About) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={User} variant="sectionTitle">
        {intl.profile.title}
      </TextWithIcon>
      <View style={styles.sectionContent}>
        <Text style={typography.body}>{props.profile}</Text>
      </View>
    </View>
  );
}
